import { RequestAPI } from './../utils/api';
import { constant } from './../constants/constant';
import { RoundPeResourceInterface } from './../utils/interface';

export class UtilApi extends RoundPeResourceInterface {
  private _request: RequestAPI;

  constructor(options: any) {
    super(constant.VERSION);
    this._request = new RequestAPI(options);
  }

  async getStatus() {
    try {
      const response = await this._request.get({
        url: this.resourceUrl + constant.STATUS,
      });
      return response;
    } catch (error) {
      console.log('inside chargeApi catch', error);
      return error;
    }
  }

  async getTokenNetworkInfo() {
    try {
      const response = await this._request.get({
        url: this.resourceUrl + constant.GET_TOKEN_NETWORK_INFO,
      });
      return response;
    } catch (error) {
      console.log('inside chargeApi catch', error);
      return error;
    }
  }
}
