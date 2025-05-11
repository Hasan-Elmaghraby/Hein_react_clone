import { useMutation } from "@tanstack/react-query";
import { Axios } from "@/shared/services/Axios";
import { ACTIVATE } from "@/shared/services/api/config";

const useActivateCode = () => {
  return useMutation({
    mutationFn: async (formData: { mobile: string; code: string }) => {
      const { data } = await Axios.post(`${ACTIVATE}`, formData);
      return data;
    },
  });
};

export default useActivateCode;
