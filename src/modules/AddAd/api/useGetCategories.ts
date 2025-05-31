import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { CATEGORIES } from "@/shared/services/api/config";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await Axios.get(CATEGORIES);
      return data.data;
    },
  });
};
