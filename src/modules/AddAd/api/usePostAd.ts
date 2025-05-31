import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { ITEMS } from "@/shared/services/api/config";
import Cookies from "js-cookie";

interface FormData {
  title: string;
  price: number | string;
  category_id: number | string;
  area_id: number | string;
  content: string;
  images: File[];
}

export const usePostAd = () => {
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const { data: response } = await Axios.post(ITEMS, formData, {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      });
      return response;
    },
  });
};
