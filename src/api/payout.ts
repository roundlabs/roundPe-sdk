import { RequestAPI } from '../utils/api';
import { constant } from '../constants/constant';
import { RoundPeResourceInterface, ICreatePayout } from '../utils/interface';

export class PayoutApi extends RoundPeResourceInterface {
  private _request: RequestAPI;

  constructor(options: any) {
    super(constant.VERSION);
    this._request = new RequestAPI(options);
  }

  async createPayout(payoutData: ICreatePayout) {
    try {
      const response = await this._request.post({
        url: this.resourceUrl + constant.CREATE_PAYOUT,
        data: payoutData,
      });

      return response;
    } catch (error) {
      console.log('inside chargeApi catch', error);
      return error;
    }
  }

  async getPayout(code) {
    try {
      const response = await this._request.post({
        url: this.resourceUrl + constant.GET_PAYOUT,
        data: { code },
      });
      return response;
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
      return response;
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
      return response;
    } catch (error) {
      console.log('inside chargeApi catch', error);
      return error;
    }
  }
}
