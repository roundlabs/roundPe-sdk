import { RoundPeAPI } from './api';
const pkg = require('../package.json');
import { setHostUrl } from './resources/configs/config';
import { RoundPeResourceInterface } from './resources/util/interface';

interface IRoundPeCreateCharge {
  name: string,
  description: string
  localPrice: {
    amount: number,
    currency: string,
  };
  pricingType: string,
  withFees: boolean,
}

interface IGetFeesFromAmount {
  amount: number,
  withFees?: boolean,
}

export class RoundPe extends RoundPeResourceInterface {
  private _api: any;

  constructor(apiKey: string) {
    super('v1/');

    if (!apiKey) {
      throw new Error('`apiKey` is mandatory');
    }

    this._api = new RoundPeAPI({
      hostUrl: setHostUrl('stage'),
      ua: `roundpe-node@${RoundPe.VERSION}`,
      headers: {
        'x-api-key': apiKey,
      },
    });
  }

  static get VERSION() {
    return pkg.version;
  }

  async createCharge(charge: IRoundPeCreateCharge) {
    try {
      return await this._api.post({
        url: this.resourceUrl + 'charges',
        data: charge,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getSystemStatus() {
    return await this._api.get({
      url: this.resourceUrl + 'status',
    });
  }

  async getCharge(chargeId: string) {
    try {
      if (!chargeId) {
        throw new Error(this.MISSING_ID_ERROR);
      }
      return await this._api.get({
        url: `${this.resourceUrl}charges/${chargeId}`,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getFeesFromAmount(amount: IGetFeesFromAmount) {
    return await this._api.post({
      url: `${this.resourceUrl}getFeesFromAmount`,
      data: amount,
    });
  }
}