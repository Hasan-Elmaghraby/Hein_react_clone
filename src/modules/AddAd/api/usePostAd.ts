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
}

export const usePostAd = () => {
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const body = new FormData();

      body.append("title", formData.title);
      body.append("price", String(formData.price));
      body.append("category_id", String(formData.category_id));
      body.append("area_id", String(formData.area_id));
      body.append("content", formData.content);

      // Append image files
      formData.images.forEach((media) => {
        if (media.file) {
          body.append("images[]", media.file); // use `images[]` if your backend expects an array
        }
      });

      const { data: response } = await Axios.post(ITEMS, body, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      });

      return response;
    },
  });
};
