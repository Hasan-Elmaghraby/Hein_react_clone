export interface Categories {
  id: number;
  sort?: number;
  parent_id?: number;
  name?: string;
  content: string;
  image: string;
  sub_categories?: SubCategory[];
}

export interface SubCategory {
  id: number;
  name: string;
  parent_id: number;
  sub_categories: SubCategory[];
}
