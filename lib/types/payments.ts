// Tipos para el sistema de pagos
export interface PaymentMethod {
  id: string;
  user_id: string;
  openpay_token: string;
  payment_type: 'card' | 'clabe';
  card_brand?: string;
  last_four_digits?: string;
  holder_name: string;
  expiration_month?: string;
  expiration_year?: string;
  bank_name?: string;
  clabe_number?: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: string;
  project_id: string;
  payer_id: string;
  payee_id: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  payment_method_id?: string;
  transaction_id?: string;
  description?: string;
  currency: string;
  created_at: string;
  updated_at: string;
  // Datos relacionados
  project?: {
    id: string;
    title: string;
  };
  payer?: {
    id: string;
    name: string;
    email: string;
  };
  payee?: {
    id: string;
    name: string;
    email: string;
  };
  payment_method?: PaymentMethod;
}

export interface AccountBalance {
  total_balance: number;
  available_balance: number;
  pending_balance: number;
  currency: string;
  updated_at: string;
}

export interface Transaction {
  id: string;
  user_id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  reference_id?: string;
  reference_type?: 'payment' | 'withdrawal' | 'refund';
  status: 'completed' | 'pending' | 'failed';
  created_at: string;
}

// Tipos para formularios
export interface CardFormData {
  holder_name: string;
  card_number: string;
  expiration_month: string;
  expiration_year: string;
  cvv2: string;
}

export interface PaymentFormData {
  amount: number;
  currency: string;
  description?: string;
  payment_method_id?: string;
  project_id?: string;
  payee_id?: string;
}

// Tipos para respuestas de API
export interface PaymentResponse {
  success: boolean;
  data?: Payment;
  error?: string;
  transaction_id?: string;
}

export interface PaymentMethodResponse {
  success: boolean;
  data?: PaymentMethod;
  error?: string;
}

export interface BalanceResponse {
  success: boolean;
  data?: AccountBalance;
  error?: string;
}

// Tipos para OpenPay
export interface OpenPayCardData {
  card_number: string;
  holder_name: string;
  expiration_year: string;
  expiration_month: string;
  cvv2: string;
}

export interface OpenPayTokenResponse {
  id: string;
  card: {
    brand: string;
    card_number: string;
    holder_name: string;
    expiration_year: string;
    expiration_month: string;
    bank_name: string;
    bank_code: string;
    allows_charges: boolean;
    allows_payouts: boolean;
  };
  status: string;
  error_message?: string;
}

export interface OpenPayChargeRequest {
  source_id: string;
  amount: number;
  currency: string;
  description: string;
  device_session_id?: string;
  customer?: {
    name: string;
    email: string;
  };
}

export interface OpenPayChargeResponse {
  id: string;
  amount: number;
  currency: string;
  status: string;
  description: string;
  error_message?: string;
  fee?: {
    amount: number;
    currency: string;
  };
  customer?: {
    name: string;
    email: string;
  };
  created_at: string;
}

// Tipos para webhooks
export interface OpenPayWebhookEvent {
  id: string;
  type: string;
  created_at: string;
  data: {
    object: OpenPayChargeResponse;
  };
}

// Tipos para filtros y búsqueda
export interface PaymentFilters {
  status?: string;
  type?: 'sent' | 'received' | 'all';
  date_from?: string;
  date_to?: string;
  search?: string;
  limit?: number;
  offset?: number;
}

export interface PaymentStats {
  total_sent: number;
  total_received: number;
  pending_count: number;
  completed_count: number;
  failed_count: number;
  refunded_count: number;
  current_month_sent: number;
  current_month_received: number;
}
