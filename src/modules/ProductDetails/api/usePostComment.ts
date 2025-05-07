import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { ITEM } from "@/shared/services/api/config";
import { Comment } from "@/shared/model/SingleProduct";

const usePostComment = (ProductId: string | number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (commentData) => {
      const token = "2434|cC4aLpsS9gW18k1LLB89QKEixN73ZnviGdqrGW1Zdef9b7b6";

      const { data } = await Axios.post(
        `${ITEM}/${ProductId}/comment`,
        commentData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data as Comment;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product", ProductId] });
    },
  });
};

export default usePostComment;
