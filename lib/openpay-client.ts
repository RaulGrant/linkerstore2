// Re-exportar funciones del mock para desarrollo
// En producción, estas funciones deberían conectarse a la API real de OpenPay

import { 
  tokenizeCard as mockTokenizeCard, 
  processCharge as mockProcessCharge,
  generateDeviceSessionId as mockGenerateDeviceSessionId,
  validateOpenpayConfig
} from './openpay-mock';

// Verificar configuración al cargar el módulo
if (!validateOpenpayConfig()) {
  console.warn('OpenPay: Usando configuración mock para desarrollo');
}

// Exportar funciones principales
export const tokenizeCard = mockTokenizeCard;
export const processPayment = mockProcessCharge;
export const generateDeviceSessionId = mockGenerateDeviceSessionId;

// Función para crear cliente OpenPay (mock)
export async function createCustomer(customerData: {
  name: string;
  email: string;
  phone_number?: string;
  address?: any;
}) {
  // Mock - En producción esto crearía un cliente real en OpenPay
  return {
    id: 'cust_' + Math.random().toString(36).substr(2, 9),
    name: customerData.name,
    email: customerData.email,
    status: 'active',
    created_at: new Date().toISOString()
  };
}

// Función para almacenar método de pago
export async function storePaymentMethod(userId: string, tokenData: any) {
  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const paymentMethod = {
      user_id: userId,
      openpay_token: tokenData.id,
      payment_type: 'card',
      last_four_digits: tokenData.card?.card_number?.slice(-4) || '0000',
      card_brand: tokenData.card?.brand || 'unknown',
      holder_name: tokenData.card?.holder_name || 'Unknown',
      expiration_month: tokenData.card?.expiration_month || '12',
      expiration_year: tokenData.card?.expiration_year || '25',
      is_default: true
    };

    const { data, error } = await supabase
      .from('stored_payment_methods')
      .insert(paymentMethod)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error storing payment method:', error);
    throw error;
  }
}

// Función para verificar configuración
export function isConfigured(): boolean {
  return validateOpenpayConfig();
}

export default {
  tokenizeCard,
  processPayment,
  generateDeviceSessionId,
  createCustomer,
  storePaymentMethod,
  isConfigured
};
