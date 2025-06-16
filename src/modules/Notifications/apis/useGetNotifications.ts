import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { NOTIFICATIONS } from "@/shared/services/api/config";
import Cookies from "js-cookie";

export const useGetNotifications = () => {
  return useQuery({
    queryKey: ["notifications"],

    queryFn: async () => {
      const { data } = await Axios.get(NOTIFICATIONS, {
        headers: { Authorization: `Bearer ${Cookies.get("access_token")}` },
      });
      return data.data;
    },
  });
};
