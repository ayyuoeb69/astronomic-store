import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosHeaders,
} from "axios";

export const onFirstRequestPublic = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  if (!config.headers) {
    config.headers = new AxiosHeaders();
  }

  config.headers.set("Content-Type", "application/json");

  return config;
};

export const onFulfilledRequest = (response: AxiosResponse): AxiosResponse =>
  response;

export const onRejectedResponse = async (
  error: AxiosError
): Promise<{ error: { details: string } }> => {
  return Promise.reject({
    error: {
      details: error.message,
    },
  });
};

export const publicRequest = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/`,
});

publicRequest.interceptors.request.use(
  onFirstRequestPublic,
  (error: AxiosError) => Promise.reject(error)
);
publicRequest.interceptors.response.use(onFulfilledRequest, onRejectedResponse);
