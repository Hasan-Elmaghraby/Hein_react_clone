import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { MY_RATES } from "@/shared/services/api/config";
import Cookies from "js-cookie";

const useGetMyRates = () => {
  const access_token = Cookies.get("access_token");
  return useQuery({
    queryKey: ["my-rates"],
    queryFn: async () => {
      const { data } = await Axios.get(MY_RATES, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      return data.data;
    },
  });
};

export default useGetMyRates;
