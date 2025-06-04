import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { ITEMS } from "@/shared/services/api/config";
import Cookies from "js-cookie";
import { MediaFile } from "..";

interface FormData {
  title: string;
  price: number | string;
  category_id: number | string;
  area_id: number | string;
  content: string;
  images: MediaFile[];
  show_phone: number | string;
}

export const usePutAd = (id: number | string) => {
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const body = new FormData();

      body.append("title", formData.title);
      body.append("price", String(formData.price));
      body.append("category_id", String(formData.category_id));
      body.append("area_id", String(formData.area_id));
      body.append("content", formData.content);
      body.append("show_phone", String(formData.show_phone));

      formData.images.forEach((media) => {
        if (media.file) {
          body.append("images[]", media.file);
        }
      });

      const { data: response } = await Axios.put(`${ITEMS}/${id}`, body, {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      });

      return response;
    },
  });
};
