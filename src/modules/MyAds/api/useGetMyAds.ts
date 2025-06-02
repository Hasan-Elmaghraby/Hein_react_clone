import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { MY_ITEMS } from "@/shared/services/api/config";
import Cookies from "js-cookie";

export const useGetMyAds = (activeNumber: string | number) => {
  return useQuery({
    queryKey: ["my-ads", activeNumber],
    queryFn: async () => {
      const { data } = await Axios.get(`${MY_ITEMS}?active=${activeNumber}`, {
        headers: { Authorization: `Bearer ${Cookies.get("access_token")}` },
      });
      return data.data;
    },
  });
};
