import { NextResponse } from 'next/server';

interface WebhookLog {
  timestamp: string;
  ip: string;
  event_type: string;
  status: string;
  error?: string;
  transaction_id?: string;
}

function logWebhookRequest(log: WebhookLog) {
  console.log('Webhook log:', {
    ...log,
    request_source: 'openpay'
  });
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

    // Log del webhook
    logWebhookRequest({
      timestamp: new Date().toISOString(),
      ip: clientIp || 'unknown',
      event_type: event.type,
      status: 'processed',
      transaction_id: event.transaction.id
    });

    // Procesar diferentes tipos de eventos (solo logging por ahora)
    switch (event.type) {
      case 'charge.succeeded':
        console.log(`✅ Payment succeeded: $${event.transaction.amount} MXN (Transaction: ${event.transaction.id})`);
        break;

      case 'charge.failed':
        console.log(`❌ Payment failed: $${event.transaction.amount} MXN (Transaction: ${event.transaction.id})`);
        break;

      case 'charge.refunded':
        console.log(`🔄 Payment refunded: $${event.transaction.amount} MXN (Transaction: ${event.transaction.id})`);
        break;

      default:
        console.log(`ℹ️ Unknown event type: ${event.type} (Transaction: ${event.transaction.id})`);
    }

    return new NextResponse('OK', { status: 200 });
  } catch (error: any) {
    console.error('Webhook error:', error);
    
    // Log del error
    logWebhookRequest({
      timestamp: new Date().toISOString(),
      ip: 'unknown',
      event_type: 'error',
      status: 'failed',
      error: error.message
    });
    
    return new NextResponse(error.message, { status: 500 });
  }
}
