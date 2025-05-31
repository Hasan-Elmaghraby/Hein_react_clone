import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { AREAS } from "@/shared/services/api/config";

export const useGetAreas = () => {
  return useQuery({
    queryKey: ["areas"],
    queryFn: async () => {
      const { data } = await Axios.get(AREAS);
      return data.data;
    },
  });
};
