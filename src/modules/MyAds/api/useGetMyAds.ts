import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { MY_ITEMS } from "@/shared/services/api/config";
import Cookies from "js-cookie";

export const useGetMyAds = () => {
  return useQuery({
    queryKey: ["my-ads"],
    queryFn: () =>
      Axios.get(`${MY_ITEMS}?active=0`, {
        headers: { Authorization: `Bearer ${Cookies.get("access_token")}` },
      }),
  });
};
