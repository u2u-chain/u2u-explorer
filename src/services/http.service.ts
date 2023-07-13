import type {AxiosError, AxiosInstance, AxiosResponse} from "axios";
import axios from "axios";
import {HTTP_CODES} from "@/configs/http.config";

export default class Http {
  private instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    const axiosConfigs = config || {};
    const instance = axios.create({...axiosConfigs});
    Object.assign(instance, this.setupInterceptorsTo(instance));
    this.instance = instance;
  }

  private onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
  };

  private onResponseError = (error: AxiosError): Promise<AxiosError> => {
    const statusCode = error?.response?.status;
    switch (statusCode) {
      case HTTP_CODES.InternalServerError: {
        window.location.replace("/status/500")
        break;
      }
    }
    return Promise.reject(error);
  };

  private setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.response.use(
      this.onResponse,
      this.onResponseError
    );
    return axiosInstance;
  }

  public async get<T>(url: string) {
    return await this.instance.get<T>(url);
  }

}
