export interface Home {
  sliders: Slider[];
  about: About;
  category_subtitle: string;
  categories: CategoryElement[];
  latest_subtitle: string;
  latest: Latest[];
}

export interface About {
  title: string;
  subtitle: string;
  image?: string;
  content: string;
}

export interface CategoryElement {
  id: number;
  name: string;
  image: string;
}

export interface Latest {
  id: number;
  show_phone: boolean;
  status: number;
  status_txt: string;
  is_liked: boolean;
  image: string;
  title: string;
  price: string;
  category: ParentClass;
  time_ago: string;
  area: LatestArea;
  user: User;
}

export interface LatestArea {
  id: number;
  name: string;
  area_id: number;
  area: AreaArea;
}

export interface AreaArea {
  id: number;
  name: string;
}

export interface ParentClass {
  parent_id: number | null;
  id: number;
  name: string;
  image: string;
  parent: ParentClass | null;
}

export interface User {
  id: number;
  name: string;
  mobile: string;
  email: string;
  image: string;
  myrate: string;
}

export interface Slider {
  id: number;
  sort?: number;
  title: string;
  content: string;
  image: string;
  link?: string;
}
