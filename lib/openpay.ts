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
}) => {
  return new Promise((resolve, reject) => {
    openpay.token.create(cardData, 
      (response: any) => {
        resolve(response);
      },
      (error: any) => {
        reject(error);
      }
    );
  });
};

// Función para crear un cliente en OpenPay
export const createCustomer = async (customerData: {
  name: string;
  email: string;
  phone_number?: string;
}) => {
  const url = `https://api.openpay.mx/v1/${OPENPAY_ID}/customers`;
  const response = await axios.post(url, customerData, {
    auth: {
      username: OPENPAY_PRIVATE_KEY,
      password: ''
    }
  });
  return response.data;
};

// Función para procesar un pago
export const processPayment = async (paymentData: {
  source_id: string;
  amount: number;
  currency: string;
  description: string;
  device_session_id: string;
  customer: {
    name: string;
    email: string;
  };
}) => {
  const url = `https://api.openpay.mx/v1/${OPENPAY_ID}/charges`;
  const response = await axios.post(url, paymentData, {
    auth: {
      username: OPENPAY_PRIVATE_KEY,
      password: ''
    }
  });
  return response.data;
};

// Función para generar el device session id
export const generateDeviceSessionId = () => {
  return crypto.lib.WordArray.random(16).toString();
};

// Función para almacenar un método de pago
export const storePaymentMethod = async (userId: string, tokenData: any) => {
  // Aquí implementaremos la lógica para guardar el token en nuestra base de datos
  // usando las tablas que ya creamos en Supabase
  const { supabase } = await import('./supabase-server');
  
  const paymentMethod = {
    user_id: userId,
    openpay_token: tokenData.id,
    payment_type: 'card',
    last_four_digits: tokenData.card.last_four_digits,
    card_brand: tokenData.card.brand,
    holder_name: tokenData.card.holder_name,
    expiration_month: tokenData.card.expiration_month,
    expiration_year: tokenData.card.expiration_year,
    is_default: true
  };

  const { data, error } = await supabase
    .from('stored_payment_methods')
    .insert(paymentMethod)
    .select()
    .single();

  if (error) throw error;
  return data;
};
