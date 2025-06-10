import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { CalculateCommission } from "@/shared/services/api/config";
import Cookies from "js-cookie";
export const usePostCalculateCommission = () => {
  return useMutation({
    mutationFn: async (total: string | number) => {
      const formData = new FormData();
      formData.append("total", total.toString());
      const { data } = await Axios.post(`${CalculateCommission}`, formData, {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      });
      return data.data;
    },
  });
};
