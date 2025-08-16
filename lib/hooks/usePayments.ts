'use client';

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { PaymentMethod, Payment, AccountBalance, PaymentFilters, PaymentStats } from '@/lib/types/payments';

// Hook para gestionar métodos de pago
export function usePaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClientComponentClient();

  const loadPaymentMethods = async () => {
    try {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');

      // Mock data - En producción esto vendría de Supabase
      const mockMethods: PaymentMethod[] = [
        {
          id: '1',
          user_id: user.id,
          openpay_token: 'tok_test_123',
          payment_type: 'card',
          card_brand: 'Visa',
          last_four_digits: '4242',
          holder_name: 'Juan Pérez',
          expiration_month: '12',
          expiration_year: '25',
          is_default: true,
          created_at: '2024-01-15T10:00:00Z',
          updated_at: '2024-01-15T10:00:00Z'
        }
      ];

      setPaymentMethods(mockMethods);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addPaymentMethod = async (method: Omit<PaymentMethod, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');

      // Mock - En producción esto haría POST a /api/payment-methods
      const newMethod: PaymentMethod = {
        ...method,
        id: Date.now().toString(),
        user_id: user.id,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      setPaymentMethods(prev => [...prev, newMethod]);
      return newMethod;
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const deletePaymentMethod = async (id: string) => {
    try {
      // Mock - En producción esto haría DELETE a /api/payment-methods/:id
      setPaymentMethods(prev => prev.filter(method => method.id !== id));
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const setDefaultPaymentMethod = async (id: string) => {
    try {
      // Mock - En producción esto haría PUT a /api/payment-methods/:id
      setPaymentMethods(prev => prev.map(method => ({
        ...method,
        is_default: method.id === id
      })));
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    loadPaymentMethods();
  }, []);

  return {
    paymentMethods,
    loading,
    error,
    addPaymentMethod,
    deletePaymentMethod,
    setDefaultPaymentMethod,
    refetch: loadPaymentMethods
  };
}

// Hook para gestionar pagos
export function usePayments(filters?: PaymentFilters) {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClientComponentClient();

  const loadPayments = async () => {
    try {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');

      // Mock data - En producción esto vendría de Supabase con filtros
      const mockPayments: Payment[] = [
        {
          id: '1',
          project_id: 'proj-1',
          payer_id: 'user-1',
          payee_id: user.id,
          amount: 15000.00,
          status: 'completed',
          currency: 'MXN',
          description: 'Pago por proyecto desarrollo app',
          created_at: '2024-01-15T10:00:00Z',
          updated_at: '2024-01-15T10:00:00Z',
          project: {
            id: 'proj-1',
            title: 'Desarrollo App Mobile'
          },
          payer: {
            id: 'user-1',
            name: 'Empresa ABC',
            email: 'empresa@abc.com'
          }
        }
      ];

      setPayments(mockPayments);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createPayment = async (paymentData: Omit<Payment, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      // Mock - En producción esto haría POST a /api/payments
      const newPayment: Payment = {
        ...paymentData,
        id: Date.now().toString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      setPayments(prev => [newPayment, ...prev]);
      return newPayment;
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    loadPayments();
  }, [filters]);

  return {
    payments,
    loading,
    error,
    createPayment,
    refetch: loadPayments
  };
}

// Hook para gestionar balance de cuenta
export function useAccountBalance() {
  const [balance, setBalance] = useState<AccountBalance | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClientComponentClient();

  const loadBalance = async () => {
    try {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');

      // Mock data - En producción esto vendría de /api/account/balance
      const mockBalance: AccountBalance = {
        total_balance: 2500.00,
        available_balance: 2000.00,
        pending_balance: 500.00,
        currency: 'MXN',
        updated_at: new Date().toISOString()
      };

      setBalance(mockBalance);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBalance();
  }, []);

  return {
    balance,
    loading,
    error,
    refetch: loadBalance
  };
}

// Hook para estadísticas de pagos
export function usePaymentStats() {
  const [stats, setStats] = useState<PaymentStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClientComponentClient();

  const loadStats = async () => {
    try {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');

      // Mock data - En producción esto vendría de /api/payments/stats
      const mockStats: PaymentStats = {
        total_sent: 25000.00,
        total_received: 45000.00,
        pending_count: 3,
        completed_count: 15,
        failed_count: 1,
        refunded_count: 0,
        current_month_sent: 8000.00,
        current_month_received: 12000.00
      };

      setStats(mockStats);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  return {
    stats,
    loading,
    error,
    refetch: loadStats
  };
}

// Hook para procesar pagos
export function usePaymentProcessor() {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processPayment = async (paymentData: {
    amount: number;
    payment_method_id: string;
    project_id: string;
    payee_id: string;
    description?: string;
  }) => {
    try {
      setProcessing(true);
      setError(null);

      // Mock - En producción esto haría POST a /api/payments/process
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simular procesamiento

      // Simular éxito/fallo aleatorio para testing
      if (Math.random() < 0.1) {
        throw new Error('Error en el procesamiento del pago');
      }

      return {
        success: true,
        transaction_id: 'txn_' + Date.now(),
        status: 'completed'
      };
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setProcessing(false);
    }
  };

  return {
    processPayment,
    processing,
    error
  };
}
