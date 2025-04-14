export interface MyPlan {
  id: number;
  title: string;
  price: number;
  currency: string;
  image: string;
  details: Details;
  started_at: Date;
  ended_at: Date;
}

export interface Details {
  items_count: string;
  period_text: string;
  period_type: string;
  period_length: string;
}
