import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { CHARGE } from "@/shared/services/api/config";
import Cookies from "js-cookie";

export const usePostChargeWallet = () => {
  return useMutation({
    mutationKey: ["charge"],
    mutationFn: async (amount: string) => {
      const formData = new FormData();
      formData.append("amount", amount);

      const { data } = await Axios.post(CHARGE, formData, {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      });

      return data;
    },
  });
};
