import { useQuery } from '@tanstack/react-query';
import { SETTINGS } from './config';
import { Axios } from '../Axios';
import { Settings } from '@/shared/model/Settings';

const useSiteLayout = () => {
  return useQuery({
    queryKey: ['siteLayout'],
    queryFn: async () => {
      const { data } = await Axios.get(SETTINGS);
      return data.data as Settings;
    },
  });
};

export default useSiteLayout;
