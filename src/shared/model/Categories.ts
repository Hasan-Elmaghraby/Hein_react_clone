export interface Categories {
  id: number;
  sort: number | null;
  parent_id: number | null;
  name: string;
  content: null;
  image: string;
  sub_categories: SubCategory[];
}

export interface SubCategory {
  id: number;
  name: string;
  parent_id: number;
  sub_categories: SubCategory[];
}
