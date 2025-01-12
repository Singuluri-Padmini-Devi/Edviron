export interface Transaction {
  collect_id: string;
  school_id: string;
  gateway: string;
  order_amount: number;
  transaction_amount: number;
  status: 'Success' | 'Pending' | 'Failed';
  custom_order_id: string;
  created_at?: string;
}