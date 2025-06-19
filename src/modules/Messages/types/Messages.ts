export interface MessagesTypes {
  id: string;
  message: string;
  created_at: string;
  fromme: boolean;
  from: {
    created_at: string;
    name: string;
    image: string;
  };
}

export interface ChatUsers {
  id: string;
  room_id: string;
  user: {
    id: string;
    image: string;
    name: string;
    last_login_time: string;
  };
  message: string;
  is_readed: boolean;
}
