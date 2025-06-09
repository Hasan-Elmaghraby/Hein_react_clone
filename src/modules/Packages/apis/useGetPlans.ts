import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { PLANS } from "@/shared/services/api/config";
import { Plans } from "@/shared/model/Plans";
import Cookies from "js-cookie";
export const useGetPlans = () => {
  const access_token = Cookies.get("access_token");
  return useQuery({
    queryKey: ["plans"],
    queryFn: async () => {
      const { data } = await Axios.get(PLANS, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      return data.data as Plans;
    },
  });
};
