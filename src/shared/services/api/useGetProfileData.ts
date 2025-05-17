import { useQuery } from "@tanstack/react-query";
import { Profile } from "@/shared/model/Profile";
import { PROFILE } from "@/shared/services/api/config";
import { Axios } from "@/shared/services/Axios";
import Cookies from "js-cookie";

const useGetProfileData = () => {
  const access_token = Cookies.get("access_token");
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      try {
        const { data } = await Axios.get(PROFILE, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        return data?.data?.info as Profile;
      } catch (error) {
        console.log(error);
      }
    },
  });
};

export default useGetProfileData;
