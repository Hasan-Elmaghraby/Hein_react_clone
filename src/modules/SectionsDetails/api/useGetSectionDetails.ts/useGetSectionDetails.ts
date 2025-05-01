import { useQuery } from "@tanstack/react-query";
import { Categories } from "@/shared/model/Categories";
import { Axios } from "@/shared/services/Axios";
import { CATEGORIES } from "@/shared/services/api/config";

const useGetSectionDetails = (id: number | string) => {
  return useQuery({
    queryKey: ["Categories", id],
    queryFn: async () => {
      const { data } = await Axios.get(`${CATEGORIES}`, {
        params: { category_id: id },
      });
      return data.data as Categories[];
    },
  });
};

export default useGetSectionDetails;
