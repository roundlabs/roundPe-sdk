import { isNonNullObject } from './helper';
import { BASE_URL } from '../constants/constant';
import { RoundPeAPIPayload } from './interface';
import axios from 'axios';

export class RequestAPI {
  private allowedHeaders = {
    'x-api-key': ''
  };

  private rq;
  private _options: any;

  constructor(options: any) {
    this._options = {
      headers: {
        'x-api-key': options['x_api_key'],
      },
    };

    this.rq = axios.create({
      baseURL: BASE_URL.PROD,
      headers: Object.assign(this.getValidHeaders(this._options.headers)),
    });
  }

  async get(params: RoundPeAPIPayload) {
    try {
      let url = params.url;
      const response = await this.rq.get(url, {
        ...params.data,
      });

      return response;
    } catch (err) {
      return this.normalizeError(err);
    }
  }

  async post(params: RoundPeAPIPayload) {
    try {
      let url = params.url;
      const res = await this.rq.post(url, {
        ...params.data
      });
      return res;
    } catch (err) {
      return this.normalizeError(err); 
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
      status: err?.response?.status,
      success: err?.response?.data?.success,
      message: err?.response?.data?.message,
      data: err?.response?.data?.data,
    };
  }
}
