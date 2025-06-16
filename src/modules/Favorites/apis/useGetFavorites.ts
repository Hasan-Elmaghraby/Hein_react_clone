import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { FAVOURITES } from "@/shared/services/api/config";
import Cookies from "js-cookie";

export const useGetFavorites = () => {
  return useQuery({
    queryKey: ["favorites"],

    queryFn: async () => {
      const { data } = await Axios.get(FAVOURITES, {
        headers: { Authorization: `Bearer ${Cookies.get("access_token")}` },
      });
      return data.data;
    },
  });
};
