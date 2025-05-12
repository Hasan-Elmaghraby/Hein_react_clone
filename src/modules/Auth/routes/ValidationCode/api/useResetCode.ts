import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { RESET_CODE } from "@/shared/services/api/config";

const useResetCode = () => {
  return useMutation({
    mutationFn: async (formData: { mobile: string; code: string }) => {
      const { data } = await Axios.post(`${RESET_CODE}`, formData);
      return data;
    },
  });
};

export default useResetCode;
