import {API_BASE_URL} from "@/configs/apps.config";

const axiosConfigs = {
  development: {
    baseURL: API_BASE_URL,
    timeout: 10000
  },
  production: {
    baseURL: API_BASE_URL,
    timeout: 10000
  }
}
const getAxiosConfig = () => {
  const nodeEnv: any = process.env.NODE_ENV;
  return axiosConfigs[nodeEnv];
}

export const axiosConfig = getAxiosConfig();