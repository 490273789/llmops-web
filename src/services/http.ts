import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import { useAuthStore } from '@/stores';
import type { ApiResponse } from '../types';

// Create axios instance
const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const { token } = useAuthStore.getState();

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
http.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;

    // 业务错误处理
    if (data.code !== 0) {
      return Promise.reject(new Error(data.message || '请求失败'));
    }

    return response.data;
  },
  (error) => {
    const { response } = error;

    if (response) {
      switch (response.status) {
        case 401:
          // Token expired or invalid
          useAuthStore.getState().logout();
          window.location.href = '/login';
          break;
        case 403:
          console.error('Access denied');
          break;
        case 404:
          console.error('Resource not found');
          break;
        case 500:
          console.error('Server error');
          break;
        default:
          console.error('Request failed:', response.data?.message || '请求失败');
      }
    } else {
      console.error('网络错误，请检查网络连接');
    }

    return Promise.reject(error);
  },
);

// Generic request methods
export const request = {
  get: <T>(
    url: string,
    params?: Record<string, unknown>,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> => {
    return http.get(url, { params, ...config });
  },

  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return http.post(url, data, config);
  },

  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return http.put(url, data, config);
  },

  patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return http.patch(url, data, config);
  },

  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    return http.delete(url, config);
  },
};

export default http;
