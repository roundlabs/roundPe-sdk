import { RequestAPI } from '../utils/api';
import { constant } from '../constants/constant';
import { RoundPeResourceInterface } from '../utils/interface';
import { filterResponse } from '../utils/helper';
import { ResponseData } from '../response/response';

export class ChargeApi extends RoundPeResourceInterface {
  private _request;

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
      
      let responseData = filterResponse(response);
      
      if(options && options?.rawData) {
        const obj  = new ResponseData(responseData, options);
        responseData = obj.getChargeRawData();
      }

      return responseData;
    } catch (error) {
      return error;
    }
  }

  async getCharge(chargeCode: string, options?: any) {
    try {
      const response = await this._request.get({
        url: `${this.resourceUrl}${constant.CHARGES}/${chargeCode}`,
      });
      
      let responseData = filterResponse(response);
      if(options && options?.rawData) {
        const obj  = new ResponseData(responseData, options );
        responseData = await obj.getChargeRawData();
      }
      
      return responseData;
    } catch (error) {
      return error;
    }
  }

  async getAvailableTokensInfo() {
    try {
      const response = await this._request.get({
        url: this.resourceUrl + constant.GET_AVAILABLE_TOKENS_INFO,
      });
      
      let responseData = filterResponse(response);
      return responseData;
    } catch (error) {
      return error;
    }
  }

}
