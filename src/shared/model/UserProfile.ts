export interface UserProfile {
  status: boolean;
  message: string;
  data: Data;
  pagination: Pagination;
}

export interface Data {
  info: DataInfo;
  items: Item[];
}

export interface DataInfo {
  id: number;
  is_active: boolean;
  notification_enabled: boolean;
  is_following: boolean;
  active: boolean;
  name: string;
  mobile: string;
  email: string;
  image: string;
  rate: string;
  chat_room_id: null | number;
  info: {
    about: string;
  } | null;
  access_token: null;
}

export interface Info {
  about: string;
}

export interface Item {
  id: number;
  show_phone: boolean;
  status: number;
  status_txt: string;
  is_liked: boolean;
  content?: string;
  image: string;
  title: string;
  price: string;
  category: Category;
  time_ago: string;
  area: Area;
  user: User;
}

export interface Area {
  id: number;
  name: string;
  area_id: null;
  area: null;
}

export interface Category {
  parent_id: number | null;
  id: number;
  name: string;
  image: string;
  parent: Category | null;
}

export interface User {
  id: number;
  name: string;
  mobile: string;
  email: string;
  image: string;
  myrate: string;
}

export interface Pagination {
  total: number;
  lastPage: number;
  total_pages: number;
  perPage: number;
  currentPage: number;
  next_page_url: null;
  prev_page_url: null;
}
