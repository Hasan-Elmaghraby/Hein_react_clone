import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { ITEM } from "@/shared/services/api/config";
import { Comment } from "@/shared/model/SingleProduct";
import Cookies from "js-cookie";

const usePostComment = (id: string | number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (commentData: { comment: string }) => {
      const token = Cookies.get("access_token");

      const { data } = await Axios.post(`${ITEM}/${id}/comment`, commentData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data as Comment;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items", String(id)] });
    },
  });
};

export default usePostComment;
