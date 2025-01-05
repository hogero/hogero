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

  requestGetApis(url: string, headers: any) {
    return this.request(url, "GET", null, headers);
  }

  requestPostApis(url: string, headers: any, data?: any) {
    return this.request(url, "POST", data, headers);
  }
  requestDeteApis(url: string, headers: any, data?: any) {
    return this.request(url, "DELETE", data, headers);
  }

  private async request(url: string, method: string, body?: any, headersM?: any): Promise<ResponseInterface> {
    let resReq: ResponseInterface = {
      url: url,
      headers: undefined
    };
    let initReq: RequestInit = {
      method: method,
      headers: this.headers,
    };

    if (body) {
      initReq.body = JSON.stringify(body);
      resReq.body = body;
    }
    if (headersM) {
      initReq.headers = headersM
    }

    try {
      let request = new Request(url, initReq);
      const response = await fetch(request)
      resReq.status = response.status;
      resReq.ok = response.ok;
      resReq.headers = response.headers;
      if (response.ok)
        try {
          resReq.data = await response.json();
        } catch (e) {
          resReq.data = response
        }
      else {
        resReq.error = response
      }
    } catch (error) {
      resReq.status = 400
      resReq.ok = false;
      resReq.error = error
    }
    return resReq;
  }

}