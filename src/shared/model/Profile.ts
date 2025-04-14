export interface Profile {
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
  chat_room_id: number;
  info: {
    about: string;
  } | null;
  access_token: string;
}
