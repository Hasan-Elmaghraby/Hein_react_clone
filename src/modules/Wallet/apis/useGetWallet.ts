import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { Wallet } from "@/shared/model/Wallet";
import { WALLET } from "@/shared/services/api/config";
import Cookies from "js-cookie";

export const useGetWallet = () => {
  return useQuery({
    queryKey: ["wallet"],
    queryFn: async () => {
      const { data } = await Axios.get(WALLET, {
        headers: { Authorization: `Bearer ${Cookies.get("access_token")}` },
      });
      return data.data as Wallet;
    },
  });
};
