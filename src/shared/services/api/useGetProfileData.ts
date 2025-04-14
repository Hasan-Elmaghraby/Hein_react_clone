import { useQuery } from '@tanstack/react-query';

import { Profile } from '@/shared/model/Profile';
import { PROFILE } from '@/shared/services/api/config';
import { Axios } from '@/shared/services/Axios';

const useGetProfileData = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      try {
        const { data } = await Axios.get(PROFILE);
        return data?.data?.info as Profile;
      } catch (error) {
        console.log(error);
      }
    },
  });
};

export default useGetProfileData;
