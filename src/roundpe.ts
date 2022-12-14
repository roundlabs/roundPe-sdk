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
  async createCharge(charge: IRoundPeCreateCharge, options?: any) {
    try {
      const response = await this._chargeApi.createCharge(charge, options);
      return response;
    } catch (error) {
      return error;
    }
  }

  async getCharge(chargeCode: string, options?: any) {
    try {
      const response = await this._chargeApi.getCharge(chargeCode, options);
      return response;
    } catch (error) {
      return error;
    }
  }

  // payout
  async createPayout(payoutData: ICreatePayout, options?: any) {
    try {
      const response = await this._payoutApi.createPayout(payoutData, options);
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
      const response = await this._utilApi.getTokenNetworkInfo();
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