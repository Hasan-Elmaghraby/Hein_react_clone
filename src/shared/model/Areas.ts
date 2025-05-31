export interface AreasData {
  status: boolean;
  message: string;
  areas: Areas[];
}

export interface Areas {
  id: number;
  area_id: null;
  name: string;
  cities: City[];
}

export interface City {
  id: number;
  sort: null;
  area_id: number;
  name: Name;
  flag: null;
  type: null;
}

export interface Name {
  ar: string;
  en: string;
}
