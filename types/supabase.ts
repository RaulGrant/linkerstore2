export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          user_type: 'freelancer' | 'company'
          created_at: string
          updated_at: string
          openpay_customer_id: string | null
          is_verified: boolean
        }
        Insert: {
          id: string
          email: string
          full_name?: string
          avatar_url?: string
          user_type: 'freelancer' | 'company'
          created_at?: string
          updated_at?: string
          openpay_customer_id?: string
          is_verified?: boolean
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          avatar_url?: string
          user_type?: 'freelancer' | 'company'
          created_at?: string
          updated_at?: string
          openpay_customer_id?: string
          is_verified?: boolean
        }
      }
      stored_payment_methods: {
        Row: {
          id: string
          user_id: string
          openpay_token: string
          payment_type: 'card' | 'clabe'
          last_four_digits: string
          card_brand?: string
          bank_name?: string
          holder_name: string
          expiration_month?: string
          expiration_year?: string
          is_default: boolean
          created_at: string
          last_used_at?: string
        }
        Insert: {
          id?: string
          user_id: string
          openpay_token: string
          payment_type: 'card' | 'clabe'
          last_four_digits: string
          card_brand?: string
          bank_name?: string
          holder_name: string
          expiration_month?: string
          expiration_year?: string
          is_default?: boolean
          created_at?: string
          last_used_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          openpay_token?: string
          payment_type?: 'card' | 'clabe'
          last_four_digits?: string
          card_brand?: string
          bank_name?: string
          holder_name?: string
          expiration_month?: string
          expiration_year?: string
          is_default?: boolean
          created_at?: string
          last_used_at?: string
        }
      }
    }
  }
}
