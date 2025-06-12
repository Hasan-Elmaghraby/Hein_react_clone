import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { PAY_COMMISSION } from "@/shared/services/api/config";
import Cookies from "js-cookie";
export const useOnlinePayment = () => {
  return useMutation({
    mutationFn: async (commission: string | number) => {
      const formData = new FormData();
      formData.append("commission", commission.toString());
      const { data } = await Axios.post(`${PAY_COMMISSION}`, formData, {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      });
      return data.data;
    },
  });
};
