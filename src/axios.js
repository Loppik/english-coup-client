import axios from 'axios';
import store from './store';
import configuration from './configs/config';

const setAuthHeaderInterceptor = (config) => {
  const { data: { userTokens } } = store.getState(); // FIXME: deprecated getState
  if (userTokens.data) {
    config.headers.Authorization = userTokens.data.accessToken;
  } else {
    delete config.headers.Authorization;
  }
  return config;
};

const axiosInst = axios.create({ baseURL: configuration.API_URL });

axiosInst.interceptors.request.use(setAuthHeaderInterceptor);

export default axiosInst;