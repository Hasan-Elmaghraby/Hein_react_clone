export interface SingleProduct {
  item: Item;
  related: Related[];
}

export interface Item {
  id: number;
  show_phone: boolean;
  status: number;
  status_txt: string;
  is_liked: boolean;
  images: Image[];
  title: string;
  content: string;
  time_ago: string;
  area: Area;
  price: string;
  comments: Comment[];
  chat_room_id: null;
  user: ItemUser;
  category: Category;
  share_link: string;
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

export interface Comment {
  id: number;
  item_id: number;
  comment_id: null;
  user_id: number;
  comment: string;
  created_at: string;
  user: CommentUser;
}

export interface CommentUser {
  id: number;
  name: string;
  image: string;
  myrate: string;
}

export interface Image {
  id: number;
  sort: number;
  item_id: number;
  image: string;
  file_type: string;
  video: null;
}

export interface ItemUser {
  id: number;
  name: string;
  mobile: string;
  email: string;
  image: string;
  myrate: string;
}

export interface Related {
  id: number;
  show_phone: boolean;
  status: number;
  status_txt: string;
  is_liked: boolean;
  image: string;
  title: string;
  price: string;
  category: Category;
  time_ago: string;
  area: Area;
  user: ItemUser;
}
