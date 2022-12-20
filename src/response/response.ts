export class ResponseData {
  private _rawDataFlag: boolean;
  private _responseData: any;
  private _rawData: any;

  constructor(data: any, options: any) {
    this._rawDataFlag = options['rawData'];
    this._responseData = data;
  }

  async getChargeRawData() {
    if (this._rawDataFlag) {
      this._rawData = {
        name: this._responseData['name'],
        code: this._responseData['code'],
        amount: this._responseData['amountRequested'],
        status: this._responseData['status'],
        hostedUrl: this._responseData['hostedUrl'],
      };
    }
    return this._rawData;
  }

  async getPayoutRawData() {
    if (this._rawDataFlag) {
      this._rawData = {
        code: this._responseData['code'],
        amount: this._responseData['amount'],
        txHash: this._responseData['txHash'],
        address: this._responseData['address'],
        timeline: this._responseData['timeline'],
      };
    }
    
    return this._rawData;
  }
}
