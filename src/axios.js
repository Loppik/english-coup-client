import axios from 'axios';
import store from './store';
import { API_URL } from './configs/config';

const setAuthHeaderInterceptor = (config) => {
  const { data: { userTokens } } = store.getState(); // FIXME: deprecated getState
  if (userTokens.data) {
    config.headers.Authorization = userTokens.data.accessToken;
  } else {
    delete config.headers.Authorization;
  }
  return config;
};

const axiosInst = axios.create({ baseURL: API_URL });

axiosInst.interceptors.request.use(setAuthHeaderInterceptor);

export default axiosInst;