import { getJSON } from "./utils";

export interface ResponseInterface<T = any> {
  url: string;
  body?: any;
  headers?: Headers;
  data?: T,
  status?: number,
  ok?: boolean,
  error?: any
}
export class DataService {
  private headers = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json; charset=utf-8",
  });
  setHeaders(headers: HeadersInit | undefined) {
    this.headers = new Headers(headers);
  }

  addToken(token: string) {
    this.headers.append("Authorization", token);
  }

  requestGet(url: string): Promise<ResponseInterface> {
    return this.request(url, "GET");
  }

  requestPost(url: string, data?: any): Promise<ResponseInterface> {
    return this.request(url, "POST", data);
  }

  requestPut(url: string, data?: any): Promise<ResponseInterface> {
    return this.request(url, "PUT", data);
  }

  requestPatch(url: string, data?: any): Promise<ResponseInterface> {
    return this.request(url, "PATCH", data);
  }

  requestDelete(url: string, data?: any): Promise<ResponseInterface> {
    return this.request(url, "DELETE", data);
  }

  private async request(url: string, method: string, body?: any): Promise<ResponseInterface> {
    const resReq: ResponseInterface = {
      url: url,
      headers: undefined
    };
    const initReq: RequestInit = {
      method: method,
      headers: this.headers,
    };

    if (body) {
      initReq.body = JSON.stringify(body);
      resReq.body = body;
    }

    try {
      const request = new Request(url, initReq);
      const response = await fetch(request)
      resReq.status = response.status;
      resReq.ok = response.ok;
      resReq.headers = response.headers;
      if (response.ok)
          resReq.data = await getJSON(response);
      else {
        resReq.error = await getJSON(response);
      }
    } catch (error) {
      resReq.status = 400
      resReq.ok = false;
      resReq.error = error
    }
    return resReq;
  }

}