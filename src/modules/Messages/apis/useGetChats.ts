import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { CHATS } from "@/shared/services/api/config";
import Cookies from "js-cookie";

export const useGetChats = () => {
  return useQuery({
    queryKey: ["chats"],

    queryFn: async () => {
      const { data } = await Axios.get(CHATS, {
        headers: { Authorization: `Bearer ${Cookies.get("access_token")}` },
      });
      return data.data;
    },
  });
};
