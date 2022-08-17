import axios from "axios";

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
  //implementar una interface y tiene que si o si tener el get
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();
    return data;
  }
}

export class PokeApiAdapter implements HttpAdapter {
  //propiedad de la clase
  private readonly axios = axios;

  //implementar una interface y tiene que si o si tener el get
  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    return data;
  }

  /*  async post(url: string, data: any) {
    return;
  }

  async patch(url: string, data: any) {
    return;
  }

  async delete(url: string) {
    return;
  } */
}
