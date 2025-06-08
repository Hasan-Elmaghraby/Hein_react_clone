export interface Wallet {
  balance: number;
  wallet_actions: Wallet_actions[];
}

export interface Wallet_actions {
  id: number;
  balance: number;
  action: string;
  image: null;
  created_at: string;
}
