declare module 'openpay-js' {
  interface CardData {
    holder_name: string;
    card_number: string;
    expiration_month: string;
    expiration_year: string;
    cvv2: string;
  }

  interface CardResponse {
    id: string;
    card: {
      last_four_digits: string;
      brand: string;
      holder_name: string;
      expiration_month: string;
      expiration_year: string;
    };
  }

  interface TokenAPI {
    create(
      cardData: CardData,
      successCallback: (response: CardResponse) => void,
      errorCallback: (error: any) => void
    ): void;
  }

  interface OpenPayStatic {
    token: TokenAPI;
    deviceSessionId: string;
  }

  interface OpenPayConstructor {
    new (merchantId: string, publicKey: string, isProduction: boolean): OpenPayStatic;
  }

  const OpenPay: OpenPayConstructor;
  export default OpenPay;
}
