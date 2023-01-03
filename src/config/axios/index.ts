import axios, { AxiosError, AxiosResponse } from 'axios';

const axiosProviderMomo = axios.create({
  baseURL: process.env.REACT_APP_MOMO,
  proxy: {
    protocol: 'https',
    host: '118.69.212.158',
    port: 9000,
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function momoPayment<T, P = IParams>(
  { url, method, config = {} }: IAPI,
  queryParams?: P | IParams,
  uri?: string[]
) {
  let finalUrl: string = url ?? '';
  if (uri) {
    finalUrl = uri.reduce(
      (previousValue, currentValue) => `${previousValue}/${currentValue}`,
      finalUrl
    );
  }
  if ((method === 'GET' || method === 'DELETE') && queryParams) {
    config.params = queryParams;
  }
  if ((method === 'POST' || method === 'PUT') && queryParams) {
    config.data = queryParams;
  }
  try {
    const res: AxiosResponse<T> = await axiosProviderMomo({
      method,
      url: finalUrl,
      ...config,
    });
    return res.data;
  } catch (err) {
    const res = <AxiosError<IError>>err;
    return Promise.reject(res.response?.data ?? {});
  }
}
