import axios from 'axios';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5 * 1000,
});

// add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const { url, method, data } = config;
    const time = new Date().toLocaleTimeString();
    if (process.env.NODE_ENV === 'development') {
      /* eslint-disable */
      console.log(`${time}: ${method} ${url}, with data: ${JSON.stringify(data)}`);
    }
    return config;
  },
  error => Promise.reject(error),
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  // Do something with response data
  response => response,

  // Do something with response error
  error => Promise.reject(error),
);

/* eslint-disable */
Plugin.install = function (Vue, options) {
  Vue.axios = axiosInstance;
  window.axios = axiosInstance;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return axiosInstance;
      },
    },
    $axios: {
      get() {
        return axiosInstance;
      },
    },
  });
};

export default Plugin;
