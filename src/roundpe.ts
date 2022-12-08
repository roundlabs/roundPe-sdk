import { ChargeApi } from './api/common-api/charge';
import { PayoutApi } from './api/common-api/payout';
import { UtilApi } from "./utils/utilLibs";
import { verifyChecksum } from './api/common-api/webhook';
import { Base_Error } from 'api/error/error';
import {
  IRoundPeConfig,
  IRoundPeCreateCharge,
  ICreatePayout,
  IWebhookData,
} from './utils/interface';

export class RoundPeSDK {
  private _chargeApi;
  private _payoutApi;
  private _utilApi;
  private _sharedSecret;


  constructor(options: IRoundPeConfig) {
    this._sharedSecret = options.sharedSecret;
    this._chargeApi = new ChargeApi(options);
    this._payoutApi = new PayoutApi(options);
    this._utilApi = new UtilApi(options);
  }

  // charge
  async createCharge(charge: IRoundPeCreateCharge) {
    try {
      const response = await this._chargeApi.createCharge(charge);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getCharge(chargeCode: string) {
    try {
      const response = await this._chargeApi.getCharge(chargeCode);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getAvailableTokensInfo() {
    try {
      const response = await this._chargeApi.getAvailableTokensInfo();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  // payout
  async createPayout(requestData: ICreatePayout, options: any) {
    try {
      const response = await this._payoutApi.createPayout(requestData, options);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getPayout(payoutCode: string) {
    try {
      const response = await this._payoutApi.getPayout(payoutCode);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getPayoutAvailableTokensInfo() {
    try {
      const response = await this._payoutApi.getPayoutAvailableTokensInfo();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getPayoutFees() {
    try {
      const response = await this._payoutApi.getPayoutFees();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  // utils
  async getStatus() {
    try {
      const response = await this._utilApi.getStatus();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getTokenNetworkInfo() {
    try {
      const response = await this._utilApi.getAvailableTokensInfo();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  // // webhook
  async verifyChecksum(data: IWebhookData, checksum) {
    try {
      let response = verifyChecksum(data, checksum, this._sharedSecret);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}


async function test() {

  const config = {
    "x-api-key": "53667c0971b1-2ee71884-d5e9-4609-9edd-35a0ecbac5d0",
    "sharedSecret": "53667c0971b1-2ee71884-d5e9-4609-9edd-35a0ecbac5d0",
  }
  
  const roundpe = new RoundPeSDK(config);

  const charge = {
    name: 'John Doeo',
    description: 'Test Charge',
    localPrice : {
      amount: 100,
      currency: 'USD',
    },
    pricingType: 'fixed_price',
    withFees: true
  }

//   const payoutData = {
//     "network":"solana",
//     "token":"usd-coin",
//     "address":"Er8NhueQfM66HsCqzk5VpDpTi5rE9Kvuo5xJ6SA1ALAV",
//     "amount":5,
//     "metadata":{
//         "orderId":"ABC123"
//     }
// }

// const payoutCode = {
//   code: "D7MMVV3N"
// }

  // const response = await roundpe.createCharge(charge);
  const response = await roundpe.getCharge("YPBSHR9Y4R");
  // const response = await roundpe.getAvailableTokensInfo();

  // const response = await roundpe.getPayout(payoutCode);
  // const response = await roundpe.getPayoutAvailableTokensInfo();

  // const response = await roundpe.getStatus();

  console.log("===============");
  console.log("response => ",response);
  console.log("===============");
}

test();