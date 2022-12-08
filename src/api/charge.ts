import { RequestAPI } from '../utils/api';
import { constant } from '../constants/constant';
import { RoundPeResourceInterface } from '../utils/interface';

export class ChargeApi extends RoundPeResourceInterface {
  private _request: RequestAPI;

  constructor(options: any) {
    super(constant.VERSION);
    this._request = new RequestAPI(options);
  }

  async createCharge(charge, options?: any) {
    try {
      const response = await this._request.post({
        url: this.resourceUrl + constant.CHARGES,
        data: charge,
      });

      return response;
    } catch (error) {
      console.log('inside chargeApi catch', error);
      return error;
    }
  }

  async getCharge(chargeCode: string, options?: any) {
    try {
      const response = await this._request.get({
        url: `${this.resourceUrl}${constant.CHARGES}/${chargeCode}`,
      });
      return response;
    } catch (error) {
      console.log('inside chargeApi catch ', error);
      return error;
    }
  }

  async getAvailableTokensInfo() {
    try {
      const response = await this._request.get({
        url: this.resourceUrl + constant.GET_AVAILABLE_TOKENS_INFO,
      });
      return response;
    } catch (error) {
      console.log('inside chargeApi catch ', error);
      return error;
    }
  }

  async getStatus() {
    try {
      const response = await this._request.get({
        url: this.resourceUrl + constant.STATUS,
      });
      return response;
    } catch (error) {
      console.log('inside chargeApi catch ', error);
      return error;
    }
  }
}
