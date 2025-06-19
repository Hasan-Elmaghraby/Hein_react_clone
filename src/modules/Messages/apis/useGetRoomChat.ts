import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { CHAT } from "@/shared/services/api/config";
import Cookies from "js-cookie";

export const useGetRoomChat = (id: string) => {
  return useQuery({
    queryKey: ["chat", id],

    queryFn: async () => {
      const { data } = await Axios.get(`${CHAT}/${id}`, {
        headers: { Authorization: `Bearer ${Cookies.get("access_token")}` },
      });
      return data.data;
    },
  });
};
