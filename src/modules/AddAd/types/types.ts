export interface MediaFile {
  url: string;
  type: "image" | "video";
  file?: File;
}
export interface Category {
  id: number;
  name: string;
  sub_categories: SubCategory[];
}

export interface SubCategory {
  id: number;
  name: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface FormState {
  title: string;
  price: string;
  category_id: number | string;
  subCategory_id: string | number;
  area_id: string;
  city_id: string;
  content: string;
}
