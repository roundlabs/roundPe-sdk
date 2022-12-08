import { RequestAPI } from '../../utils/api';
import { IRoundPeConfig } from '../../utils/interface';
import { ENV, constant, BASE_URL } from '../../constants/constant';
import { RoundPeResourceInterface, ICreatePayout } from '../../utils/interface';

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
      console.log(error);
    }
  }

  async getPayout(payoutCode) {
    try {
      const response = await this._request.post({
        url: this.resourceUrl + constant.GET_PAYOUT,
        data: payoutCode
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getPayoutAvailableTokensInfo() {
    try {
      const response = await this._request.get({
        url: this.resourceUrl + constant.GET_PAYOUT_AVAILABLE_TOKENS_INFO
      });
      return response;

    } catch (error) {
      console.log(error);
    }
  }

  async getPayoutFees() {
    try {
      const response = await this._request.get({
        url: this.resourceUrl + constant.GET_PAYOUT_FEES
      });
      return response;

    } catch (error) {
      console.log(error);
    }
  }

}
