import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { PLANS } from "@/shared/services/api/config";

import Cookies from "js-cookie";
export const useSubscribePlan = () => {
  const access_token = Cookies.get("access_token");
  return useMutation({
    mutationKey: ["subscribe"],
    mutationFn: async (id: string | number) => {
      const { data } = await Axios.post(`${PLANS}/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      return data;
    },
  });
};
