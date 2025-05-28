import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { USER } from "@/shared/services/api/config";

export const useGetUserRates = (id: number | string) => {
  return useQuery({
    queryKey: ["user", String(id)],

    queryFn: async () => {
      const { data } = await Axios.get(`${USER}/${id}/rates`);
      return data.data;
    },
  });
};
