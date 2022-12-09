import { RequestAPI } from '../utils/api';
import { constant } from '../constants/constant';
import { RoundPeResourceInterface, ICreatePayout } from '../utils/interface';
import { filterResponse } from '../utils/helper';

export class PayoutApi extends RoundPeResourceInterface {
  private _request: RequestAPI;

  constructor(options: any) {
    super(constant.VERSION);
    this._request = new RequestAPI(options);
  }

  async createPayout(payoutData: ICreatePayout, options?: any) {
    try {
      const response = await this._request.post({
        url: this.resourceUrl + constant.CREATE_PAYOUT,
        data: payoutData,
      });

      let responseData = filterResponse(response);
      return responseData;
    } catch (error) {
      return error;
    }
  }

  async getPayout(code) {
    try {
      const response = await this._request.post({
        url: this.resourceUrl + constant.GET_PAYOUT,
        data: { code },
      });
      let responseData = filterResponse(response);
      return responseData;
    } catch (error) {
      console.log('inside chargeApi catch', error);
      return error;
    }
  }

  async getPayoutAvailableTokensInfo() {
    try {
      const response = await this._request.get({
        url: this.resourceUrl + constant.GET_PAYOUT_AVAILABLE_TOKENS_INFO,
      });
      let responseData = filterResponse(response);
      return responseData;
    } catch (error) {
      console.log('inside chargeApi catch', error);
      return error;
    }
  }

  async getPayoutFees() {
    try {
      const response = await this._request.get({
        url: this.resourceUrl + constant.GET_PAYOUT_FEES,
      });
      let responseData = filterResponse(response);
      return responseData;
    } catch (error) {
      console.log('inside chargeApi catch', error);
      return error;
    }
  }
}
