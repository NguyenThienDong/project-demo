import { useMutation, useQuery } from '@tanstack/react-query';
import { message } from 'antd';
import axios from 'axios';
import * as saveAs from 'file-saver';

// Hook useGetList
export function useGetList<T>(url: string, payload?: any) {
  return useQuery<T, Error>([url], () => axios.get(url, { params: payload }).then((res: any) => res), {
    enabled: !!payload,
    keepPreviousData: true,
  });
}

export function usePostList<T>(url: string, payload: any) {
  return useQuery<T, Error>([url, payload], () => axios.post(url, payload).then((res: any) => res), {
    enabled: !!payload,
    keepPreviousData: true,
  });
}

// Hook usePost
export function useCreate<T>(url: string) {
  return useMutation<T, Error>((data: any) => axios.post<T>(url, data).then(response => response.data), {
    onError: (err: any) => {
      message.error(err?.message);
    },
  });
}

// Hook useDelete
export function useDelete<T>(url: string) {
  return useMutation<T, Error>((data: any) => axios.post<T>(url, data).then(response => response.data), {
    onError: (err: any) => {
      message.error(err?.message);
    },
  });
}

// Hook useGetDetail
export function useGetDetail<T>(url: string) {
  return useQuery<T, Error>([url], () => axios.get<T>(url).then(response => response.data));
}

export function usePostDetail<T>(url: string) {
  return useQuery<T, Error>([url], () => axios.get<T>(url).then(response => response.data));
}

// Hook useDownload
export function useDownload(url: string) {
  const handleDownload = async (data: any) => {
    try {
      const response = await axios.post(url, data, {
        responseType: 'blob' as 'json',
      });
      const blob = new Blob([response.data]);

      saveAs(blob, 'cars_excel.xlsx');
    } catch (error: any) {
      console.error('Error downloading file:', error);
      message.error(error?.message);
    }
  };

  return handleDownload;
}

export function useImport<T>(url: string) {
  return useMutation<T, Error>((data: any) => axios.post<T>(url, data).then(response => response.data), {
    onError: (err: any) => {
      message.error(err?.message);
    },
  });
}
