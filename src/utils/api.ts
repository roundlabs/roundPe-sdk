import * as rp from 'request-promise';
import { isNonNullObject } from './helper';
import { ENV, constant, BASE_URL } from '../constants/constant';

export interface RoundPeAPIPayload {
  url: string;
  data?: any;
}

export class RequestAPI {
  private allowedHeaders = {
    'x-api-key': '',
    'sharedSecret': '',
  };

  private rq: rp.RequestPromiseAPI<any>;
  private _options: any;

  constructor(options: any) {
    this._options = {
      headers: {
        'x-api-key': options['x-api-key'],
      },
    };

    const con = {
      baseUrl: BASE_URL.DEV,
      json: true,
      headers: Object.assign(this.getValidHeaders(this._options.headers)),
    };

    console.log('req promise config : ', con);

    this.rq = rp.defaults(con);
  }

  async get(params: RoundPeAPIPayload) {
    try {
      console.log('params : ', params);
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
