import axios from 'axios';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { BASE_URL } from './api/config';

import { useAuth } from '@/modules/Auth/context/AuthProvider';

const Axios = axios.create({
  baseURL: BASE_URL,
});

const AxiosConfig = () => {
  const { i18n } = useTranslation();
  const { user } = useAuth();
  console.log(user);

  useEffect(() => {
    const requestInterceptor = Axios.interceptors.request.use((config) => {
      if (user) {
        config.headers['Authorization'] = `Bearer ${user.access_token}`;
      }
      config.headers['lang'] = i18n.language;
      config.headers['Accept-Language'] = i18n.language;
      return config;
    });

    return () => {
      Axios.interceptors.request.eject(requestInterceptor);
    };
  }, [i18n.language, user]);

  return null;
};

export { Axios, AxiosConfig };
