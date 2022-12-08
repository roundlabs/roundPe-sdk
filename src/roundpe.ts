import { ChargeApi } from './api/charge';
import { PayoutApi } from './api/payout';
import { UtilApi } from './utils/utilLibs';
import { verifyChecksum } from './api/webhook';
import {
  IRoundPeConfig,
  IRoundPeCreateCharge,
  ICreatePayout,
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
      return error;
    }
  }

  async getCharge(chargeCode: string) {
    try {
      const response = await this._chargeApi.getCharge(chargeCode);
      return response;
    } catch (error) {
      return error;
    }
  }

  async getAvailableTokensInfo() {
    try {
      const response = await this._chargeApi.getAvailableTokensInfo();
      return response;
    } catch (error) {
      return error;
    }
  }

  // payout
  async createPayout(payoutData: ICreatePayout) {
    try {
      const response = await this._payoutApi.createPayout(payoutData);
      return response;
    } catch (error) {
      return error;
    }
  }

  async getPayout(code: string) {
    try {
      const response = await this._payoutApi.getPayout(code);
      return response;
    } catch (error) {
      return error;
    }
  }

  async getPayoutAvailableTokensInfo() {
    try {
      const response = await this._payoutApi.getPayoutAvailableTokensInfo();
      return response;
    } catch (error) {
      return error;
    }
  }

  async getPayoutFees() {
    try {
      const response = await this._payoutApi.getPayoutFees();
      return response;
    } catch (error) {
      return error;
    }
  }

  // utils
  async getStatus() {
    try {
      const response = await this._utilApi.getStatus();
      return response;
    } catch (error) {
      return error;
    }
  }

  async getTokenNetworkInfo() {
    try {
      const response = await this._utilApi.getAvailableTokensInfo();
      return response;
    } catch (error) {
      return error;
    }
  }

  // // webhook
  async verifyChecksum(data, checksum) {
    try {
      let response = verifyChecksum(data, checksum, this._sharedSecret);
      return response;
    } catch (error) {
      return error;
    }
  }
}

// Testing


async function test() {
  const config = {
    'x-api-key': '53667c0971b1-2ee71884-d5e9-4609-9edd-35a0ecbac5d0',
    sharedSecret: 'fea424c5-022d-4280-bb54-52e23e0b5b44',
  };

  const roundpe = new RoundPeSDK(config);

//   const charge = {
//     name: 'John Doeo',
//     description: 'Test Charge',
//     localPrice: {
//       amount: 100,
//       currency: 'USD',
//     },
//     pricingType: 'fixed_price',
//     withFees: true,
//   };

  const payoutData = {
    network: 'solana',
    token: 'usd-coin',
    address: 'Er8NhueQfM66HsCqzk5VpDpTi5rE9Kvuo5xJ6SA1ALAV',
    amount: 5,
    metadata: {
      orderId: 'ABC123',
    },
  };

  // const response = await roundpe.createCharge(charge);
  // const response = await roundpe.getCharge("28CD82V5W");
  // const response = await roundpe.getAvailableTokensInfo();

  //payout
  const response = await roundpe.createPayout(payoutData);
  // const response = await roundpe.getPayoutFees();
  // const response = await roundpe.getPayout("7JR2Z925");
  // const response = await roundpe.getPayoutAvailableTokensInfo();

  // const response = await roundpe.getStatus();
  // const response = await roundpe.getTokenNetworkInfo();

  // const checkSum = "fda2655cb76a2916a713bacc974a5e807115ff4cd10d976ceeefbc30ec5d3b79" ;
  // const data = {"id":"27a8f790-xxxx-xxxx-xxxx-925d82064495","apiVersion":1,"createdAt":"Tue Jul 26 2022 10:45:18 GMT+0000 (Coordinated Universal Time)","type":"charge:completed","data":{"pricingType":"fixed_price","code":"XXXXXXXXXX","name":"Test Payment","supportedNetworks":["flow","bsc"],"supportedTokens":{"flow":["flow","fusd"],"bsc":["busd","tether","usd-coin"]},"description":"","expiresAt":"Tue Jul 26 2022 10:45:00 GMT+0000 (Coordinated Universal Time)","timeline":[{"time":"Tue Jul 26 2022 11:39:56 GMT+0000 (Coordinated Universal Time)","status":"NEW"},{"time":"Tue Jul 26 2022 11:41:28 GMT+0000 (Coordinated Universal Time)","status":"PENDING","txHash":"73941db881a876149d3c8d91b852ecfa3c9608854fa41c80869debedfebbdafb"},{"time":"Tue Jul 26 2022 11:41:28 GMT+0000 (Coordinated Universal Time)","status":"COMPLETED","txHash":"73941db881a876149d3c8d91b852ecfa3c9608854fa41c80869debedfebbdafb"}],"status":"COMPLETED","paymentThreshold":{"overpaymentAbsoluteThreshold":{"amount":0,"currency":"USD"},"overpaymentRelativeThreshold":1,"underpaymentAbsoluteThreshold":{"amount":0,"currency":"USD"},"underpaymentRelativeThreshold":1},"pricing":{"local":{"amount":2,"currency":"USD"},"flow":{"amount":"1.263","currency":"flow","exchangeRate":1.584},"fusd":{"amount":"2.00","currency":"fusd","exchangeRate":0.998},"usd-coin":{"amount":"2.00","currency":"usd-coin","exchangeRate":0.998},"busd":{"amount":"2.00","currency":"busd","exchangeRate":0.998},"tether":{"amount":"2.00","currency":"tether","exchangeRate":0.9979},"dai":{"amount":"2.00","currency":"dai","exchangeRate":0.998}},"payments":[{"network":"flow","token":"flow","status":"CONFIRMED","txHash":"73941db881a876149d3c8d91b852ecfa3c9608854fa41c80869debedfebbdafb","source":"0xed7673037e9c28f0","value":{"crypto":{"amount":1.255,"currency":"flow","finalAmount":1.13,"fees":0.12},"local":{"amount":2,"currency":"USD","finalAmount":1.8,"fees":0.2}},"block":{"blockNumber":74642165,"requiredConfirmations":1,"accumulatedConfirmations":0}}],"createdAt":"2022-07-26T10:40:05.318Z"}}
  // const response = await roundpe.verifyChecksum(data, checkSum);

  console.log('response => ', response);
}

test();




