import * as rp from 'request-promise';
import { isNonNullObject } from './helper';

export interface RoundPeAPIPayload {
    url: string;
    data?: any;
}

export class RoundPeAPI {

  private allowedHeaders = {
    'x-api-key': '',
  };

  private rq: rp.RequestPromiseAPI<any>;
  private _options: any;

  constructor(options: any) {
    this._options = options;
    
    const con = {
        baseUrl: this._options.hostUrl,
        json: true,
        headers: Object.assign(
          { 'User-Agent': options.ua },
          this.getValidHeaders(options.headers)
        )
    }

    this.rq = rp.defaults(con);
  }

  async get(params: RoundPeAPIPayload) {
    try {
      const res = await this.rq.get({
        url: params.url,
        qs: params.data,
      });
      return res;
    } catch (err) {
      this.normalizeError(err);
    }
  }

  async post(params: RoundPeAPIPayload) {
    try {
      const res = await this.rq.post({
        url: params.url,
        body: params.data,
      });
      return res;
    } catch (err) {
      console.log(err);
      this.normalizeError(err);
    }
  }

  // async put(params: RoundPeAPIPayload) {
  //   try {
  //     const res = await this.rq.put({
  //       url: params.url,
  //       qs: params.data,
  //     });
  //     return res;
  //   } catch (err) {
  //     this.normalizeError(err);
  //   }
  // }

  // async patch(params: RoundPeAPIPayload) {
  //   try {
  //     const res = await this.rq.patch({
  //       url: params.url,
  //       qs: params.data,
  //     });
  //     return res;
  //   } catch (err) {
  //     this.normalizeError(err);
  //   }
  // }

  // async delete(params: RoundPeAPIPayload) {
  //   try {
  //     const res = await this.rq.delete({
  //       url: params.url,
  //     });
  //     return res;
  //   } catch (err) {
  //     this.normalizeError(err);
  //   }
  // }

  private getValidHeaders(headers: any) {
    const result: any = {};
    if (!isNonNullObject(headers)) {
      return result;
    }

    return Object.keys(headers).reduce((result, headerName) => {
      if (this.allowedHeaders.hasOwnProperty(headerName)) {
        result[headerName] = headers[headerName];
      }
      return result;
    }, result);
  }

  private normalizeError(err: any) {
    throw {
      statusCode: err.statusCode,
      error: err.error.error,
    };
  }
}
