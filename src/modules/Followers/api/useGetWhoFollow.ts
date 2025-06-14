import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { FOLLOWERS } from "@/shared/services/api/config";
import Cookies from "js-cookie";

export const useGetWhoFollow = () => {
  return useQuery({
    queryKey: ["whoFollow"],
    queryFn: async () => {
      const { data } = await Axios.get(FOLLOWERS, {
        headers: { Authorization: `Bearer ${Cookies.get("access_token")}` },
      });
      return data.data;
    },
  });
};
