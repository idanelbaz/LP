/* eslint-disable class-methods-use-this */
import Axios, { AxiosResponse } from "axios";

export class AxiosCalls {
  getReq = (url: string) => Axios.get(url)
    .then(({ data }: AxiosResponse) => {
      return data;
    })
    .catch((err: any) => {
      return Promise.reject(err);
    });

  putReq = (url: string, payload: any) => (
    Axios.put(url, payload)
      .then(({ data }: AxiosResponse<any>) => {
        return data;
      })
      .catch((err: any) => {
        return Promise.reject(err);
      })
  );

  postReq = (url: string, payload: any) => (
    Axios.post(url, payload)
      .then(({ data }: AxiosResponse<any>) => {
        return data;
      })
      .catch((err: any) => {
        return Promise.reject(err);
      })
  );

  deleteReq = (url: string) => Axios.delete(url)
    .then(({ data }: AxiosResponse) => {
      return data;
    })
    .catch((err: any) => {
      return Promise.reject(err);
    });
}

export const axiosCalls = new AxiosCalls();
