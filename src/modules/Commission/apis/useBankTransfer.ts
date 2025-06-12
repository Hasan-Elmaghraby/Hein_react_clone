import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { TRANSFER_COMMISSION } from "@/shared/services/api/config";
import Cookies from "js-cookie";
interface BankTransferPayload {
  commission: string | number;
  image: File;
}

export const useBankTransfer = () => {
  return useMutation({
    mutationFn: async ({ commission, image }: BankTransferPayload) => {
      const formData = new FormData();
      formData.append("commission", commission.toString());
      formData.append("image", image);

      const { data } = await Axios.post(`${TRANSFER_COMMISSION}`, formData, {
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token")}`,
        },
      });

      return data.data;
    },
  });
};
