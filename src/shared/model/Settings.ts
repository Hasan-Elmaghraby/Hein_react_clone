export interface Settings {
  title: string;
  keywords: string;
  header_txt: string;
  description: string;
  logo: string;
  favicon: string;
  delivery_times: string[];
  commission: number;
  can_pay_online: number;
  can_transfer: number;
  bank_account_name: string;
  bank_account_id: number;
  email: string;
  about_title: string;
  about_subtitle: string;
  about_txt: string;
  category_subtitle: string;
  latest_subtitle: string;
  about_image: string;
  footer_logo: string;
  socials: Socials;
  footer_pages: FooterPage[];
}

export interface FooterPage {
  id: number;
  title: string;
}

export interface Socials {
  facebook: string;
  instagram: string;
  twitter: string;
  snapchat: string;
  whatsapp: string;
}
