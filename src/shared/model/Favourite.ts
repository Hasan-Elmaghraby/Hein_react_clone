export type FavouriteCard = {
  id: number | string;
  status: number;
  status_txt: string;
  is_liked: boolean;
  image: string;
  title: string;
  price: string | number;
  category: {
    parent_id: number;
    id: number;
    name: string;
    image: string;
    parent: null;
  };
  time_ago: string;
  area: {
    id: number;
    name: string;
    area_id: null;
    area: null;
  } | null;
  user: {
    id: number;
    name: string;
    mobile: string;
    email: string;
    image: string;
    myrate: number | string;
  };
};
