// Configuración mock para OpenPay - Solo para desarrollo
// En producción, estas funciones deberían conectarse a la API real de OpenPay

import { OpenPayCardData, OpenPayTokenResponse, OpenPayChargeRequest, OpenPayChargeResponse } from '@/lib/types/payments';

// Mock de tokenización de tarjeta
export async function tokenizeCard(cardData: OpenPayCardData): Promise<OpenPayTokenResponse> {
  // Simular delay de API
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simular error ocasional para testing
  if (Math.random() < 0.1) {
    throw new Error('Error al tokenizar la tarjeta');
  }

  // Determinar marca de tarjeta basada en el número
  const cardNumber = cardData.card_number.replace(/\s/g, '');
  let brand = 'unknown';
  
  if (cardNumber.startsWith('4')) {
    brand = 'visa';
  } else if (cardNumber.startsWith('5') || cardNumber.startsWith('2')) {
    brand = 'mastercard';
  } else if (cardNumber.startsWith('3')) {
    brand = 'american_express';
  }

  return {
    id: 'tok_' + Math.random().toString(36).substr(2, 9),
    card: {
      brand: brand,
      card_number: cardNumber,
      holder_name: cardData.holder_name,
      expiration_year: cardData.expiration_year,
      expiration_month: cardData.expiration_month,
      bank_name: 'Banco Mock',
      bank_code: '001',
      allows_charges: true,
      allows_payouts: true
    },
    status: 'active'
  };
}

// Mock de procesamiento de cargo
export async function processCharge(chargeData: OpenPayChargeRequest): Promise<OpenPayChargeResponse> {
  // Simular delay de procesamiento
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Simular error ocasional para testing
  if (Math.random() < 0.1) {
    throw new Error('Error al procesar el pago');
  }

  const chargeId = 'ch_' + Math.random().toString(36).substr(2, 9);
  
  return {
    id: chargeId,
    amount: chargeData.amount,
    currency: chargeData.currency,
    status: 'completed',
    description: chargeData.description,
    fee: {
      amount: chargeData.amount * 0.036, // 3.6% fee simulado
      currency: chargeData.currency
    },
    customer: chargeData.customer,
    created_at: new Date().toISOString()
  };
}

// Mock de generación de Device Session ID
export function generateDeviceSessionId(): string {
  return 'device_' + Math.random().toString(36).substr(2, 9);
}

// Mock de validación de webhook
export function validateWebhookSignature(payload: string, signature: string): boolean {
  // En producción, esto debería validar la firma del webhook
  return true;
}

// Configuración mock de OpenPay
export const openpayConfig = {
  merchantId: process.env.NEXT_PUBLIC_OPENPAY_MERCHANT_ID || 'mock_merchant_id',
  publicKey: process.env.NEXT_PUBLIC_OPENPAY_PUBLIC_KEY || 'mock_public_key',
  privateKey: process.env.OPENPAY_PRIVATE_KEY || 'mock_private_key',
  production: process.env.NODE_ENV === 'production',
  sandboxMode: process.env.NODE_ENV !== 'production'
};

// Validación de configuración
export function validateOpenpayConfig(): boolean {
  const requiredVars = ['merchantId', 'publicKey', 'privateKey'];
  
  for (const varName of requiredVars) {
    if (!openpayConfig[varName as keyof typeof openpayConfig] || 
        String(openpayConfig[varName as keyof typeof openpayConfig]).includes('mock_')) {
      console.warn(`OpenPay: Variable ${varName} no configurada o usando valor mock`);
      return false;
    }
  }
  
  return true;
}

// Utilidades para formateo
export const formatters = {
  currency: (amount: number, currency: string = 'MXN') => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: currency
    }).format(amount);
  },
  
  cardNumber: (cardNumber: string) => {
    return cardNumber.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
  },
  
  expirationDate: (month: string, year: string) => {
    return `${month.padStart(2, '0')}/${year}`;
  }
};

// Validaciones
export const validators = {
  cardNumber: (cardNumber: string): boolean => {
    const cleaned = cardNumber.replace(/\s/g, '');
    return /^\d{13,19}$/.test(cleaned);
  },
  
  expirationDate: (month: string, year: string): boolean => {
    const now = new Date();
    const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
    return expiry > now;
  },
  
  cvv: (cvv: string): boolean => {
    return /^\d{3,4}$/.test(cvv);
  },
  
  amount: (amount: number): boolean => {
    return amount > 0 && amount <= 1000000; // Límite máximo de $1M
  }
};

export default {
  tokenizeCard,
  processCharge,
  generateDeviceSessionId,
  validateWebhookSignature,
  openpayConfig,
  validateOpenpayConfig,
  formatters,
  validators
};
