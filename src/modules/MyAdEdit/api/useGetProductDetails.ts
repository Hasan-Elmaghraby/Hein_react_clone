import { SingleProduct } from "@/shared/model/SingleProduct";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { ITEMS } from "@/shared/services/api/config";

export const useGetProductDetails = (id: number | string) => {
  return useQuery({
    queryKey: ["items", String(id)],

    queryFn: async () => {
      const { data } = await Axios.get(`${ITEMS}/${id}`);
      return data.data as SingleProduct;
    },
  });
};
