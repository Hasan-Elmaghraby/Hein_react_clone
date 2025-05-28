import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { USER } from "@/shared/services/api/config";
import Cookies from "js-cookie";
export const usePostRate = (id: number | string) => {
  const queryClient = useQueryClient();

  const token = Cookies.get("access_token");
  return useMutation({
    mutationFn: async (formData: { rate: number }) => {
      const { data } = await Axios.post(`${USER}/${id}/rate`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", String(id)] });
    },
  });
};
