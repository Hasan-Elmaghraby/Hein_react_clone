import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { PAGES } from "@/shared/services/api/config";

export const useGetSinglePage = (id: number) => {
  return useQuery({
    queryKey: ["singlePage"],
    queryFn: async () => {
      const { data } = await Axios.get(`${PAGES}/${id}`);
      return data.data;
    },
  });
};
