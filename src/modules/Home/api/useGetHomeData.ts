import { useQuery } from "@tanstack/react-query";
import { Home } from "@/shared/model/home";
import { Axios } from "@/shared/services/Axios";
import { HOME } from "@/shared/services/api/config";

const useGetHomeData = () => {
  return useQuery({
    queryKey: ["home"],
    queryFn: async () => {
      const { data } = await Axios.get(HOME);
      return data.data as Home;
    },
  });
};

export default useGetHomeData;
