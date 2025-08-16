import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

interface WebhookLog {
  timestamp: string;
  ip: string;
  event_type: string;
  status: string;
  error?: string;
  transaction_id?: string;
}

async function logWebhookRequest(supabase: any, log: WebhookLog) {
  try {
    await supabase
      .from('webhook_logs')
      .insert({
        ...log,
        request_source: 'openpay'
      });
  } catch (error) {
    console.error('Error logging webhook:', error);
  }
}

export async function POST(req: Request) {
  try {
    // Validar que la solicitud venga de una IP confiable (opcional)
    const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip');
    console.log('Webhook request from IP:', clientIp);

    const payload = await req.text();
    console.log('Webhook payload:', payload);

    // Durante la verificación, devolver el código tal cual
    try {
      const verificationData = JSON.parse(payload);
      if (verificationData.verification_code) {
        console.log('Verification code:', verificationData.verification_code);
        return new NextResponse(verificationData.verification_code, { status: 200 });
      }
    } catch (e) {
      // Si no es JSON o no tiene verification_code, continuar con el flujo normal
    }

    // Validar que el payload sea JSON válido
    let event;
    try {
      event = JSON.parse(payload);
    } catch (e) {
      console.error('Invalid JSON payload');
      return new NextResponse('Invalid payload', { status: 400 });
    }

    // Validar que el evento tenga la estructura esperada
    if (!event.type || !event.transaction || !event.transaction.id) {
      console.error('Invalid event structure:', event);
      return new NextResponse('Invalid event structure', { status: 400 });
    }

    const supabase = createRouteHandlerClient({ cookies });

    // Procesar diferentes tipos de eventos
    switch (event.type) {
      case 'charge.succeeded':
        // Actualizar el estado del pago a succeeded
        await supabase
          .from('payments')
          .update({ 
            status: 'completed',
            updated_at: new Date().toISOString()
          })
          .eq('transaction_id', event.transaction.id);

        // Crear notificación para el payee
        await supabase
          .from('notifications')
          .insert({
            user_id: event.transaction.payee_id,
            title: 'Pago recibido',
            message: `Has recibido un pago de $${event.transaction.amount} MXN`,
            type: 'payment_received'
          });
        break;

      case 'charge.failed':
        // Actualizar el estado del pago a failed
        await supabase
          .from('payments')
          .update({ 
            status: 'failed',
            updated_at: new Date().toISOString()
          })
          .eq('transaction_id', event.transaction.id);

        // Crear notificación para el payer
        await supabase
          .from('notifications')
          .insert({
            user_id: event.transaction.payer_id,
            title: 'Pago fallido',
            message: `Tu pago de $${event.transaction.amount} MXN no pudo ser procesado`,
            type: 'payment_failed'
          });
        break;

      case 'charge.refunded':
        // Actualizar el estado del pago a refunded
        await supabase
          .from('payments')
          .update({ 
            status: 'refunded',
            updated_at: new Date().toISOString()
          })
          .eq('transaction_id', event.transaction.id);

        // Crear notificaciones para ambas partes
        await supabase
          .from('notifications')
          .insert([
            {
              user_id: event.transaction.payer_id,
              title: 'Pago reembolsado',
              message: `Tu pago de $${event.transaction.amount} MXN ha sido reembolsado`,
              type: 'payment_refunded'
            },
            {
              user_id: event.transaction.payee_id,
              title: 'Pago reembolsado',
              message: `Se ha realizado un reembolso de $${event.transaction.amount} MXN`,
              type: 'payment_refunded'
            }
          ]);
        break;
    }

    return new NextResponse('OK', { status: 200 });
  } catch (error: any) {
    console.error('Webhook error:', error);
    return new NextResponse(error.message, { status: 500 });
  }
}
