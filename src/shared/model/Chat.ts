export interface ChatContact {
  id: number;
  is_readed: boolean;
  room_id: number;
  fromme: boolean;
  user: User;
  message: string;
  attachment: string;
  created_at: string;
}

export interface User {
  id: number;
  name: string;
  image: string;
  last_login_time: string;
  myrate: string;
}
