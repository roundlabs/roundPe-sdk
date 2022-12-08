import { RequestAPI } from '../../utils/api';
import { IRoundPeConfig } from '../../utils/interface';
import { ENV, constant, BASE_URL } from '../../constants/constant';
import { RoundPeResourceInterface } from '../../utils/interface';

export class ChargeApi extends RoundPeResourceInterface {
  private _request: RequestAPI;
  
  constructor(options : any) {
    super(constant.VERSION);
    this._request = new RequestAPI(options);
  }

  async createCharge(charge) {
    try {
      console.log("inside ChargeApi create charge : ", charge);
      
      const response = await this._request.post({
        url: this.resourceUrl + constant.CHARGES,
        data: charge,
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }
  
  async getCharge(chargeCode: string) {
    try {
      // if (!chargeCode) {
        //   throw new Error(this.MISSING_ID_ERROR);
        // }
        console.log("Charge Url : ", `${this.resourceUrl}${constant.CHARGES}/${chargeCode}`);
        
        const response = await this._request.get({
          url: `${this.resourceUrl}${constant.CHARGES}/${chargeCode}`,
        });
        return response;
      } catch (error) {
        console.log(error);
      }
    }

    async getAvailableTokensInfo () {
      try {
        const response = await this._request.get({
          url: this.resourceUrl + constant.GET_AVAILABLE_TOKENS_INFO
        });
        return response;
        
      } catch (error) {
        console.log(error);
      }
    }

    async getStatus() {
      try {
        const response = await this._request.get({
          url: this.resourceUrl + constant.STATUS,
        });
        return response;
      } catch (error) {
        console.log(error);
      }
    }
    
}
