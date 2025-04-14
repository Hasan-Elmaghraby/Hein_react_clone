export interface SingleChat {
  status: boolean;
  message: string;
  data: Data;
  pagination: Pagination;
}

export interface Data {
  other: Other;
  messages: Message[];
}

export interface Message {
  id: number;
  is_readed: boolean;
  room_id: number;
  fromme: boolean;
  from: Other;
  to: Other;
  message: string;
  attachment: string;
  created_at: string;
}

export interface Other {
  id: number;
  name: string;
  image: string;
  last_login_time: Date;
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
