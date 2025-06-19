import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { SEND_MESSAGE } from "@/shared/services/api/config";
import Cookies from "js-cookie";

const usePostMessage = () => {
  return useMutation({
    mutationFn: async (messageData: { to_id: string; message: string }) => {
      const token = Cookies.get("access_token");

      const { data } = await Axios.post(`${SEND_MESSAGE}`, messageData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    },
  });
};

export default usePostMessage;
