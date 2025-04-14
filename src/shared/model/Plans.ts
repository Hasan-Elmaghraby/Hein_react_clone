export interface Plans {
  can_join_plan: boolean;
  plans: Plan[];
}

export interface Plan {
  id: number;
  title: string;
  price: number;
  currency: string;
  image: string;
  details: Details;
  started_at: null;
  ended_at: null;
}

export interface Details {
  items_count: string;
  period_text: string;
  period_type: string;
  period_length: string;
}
