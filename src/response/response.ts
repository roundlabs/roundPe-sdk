export class ResponseData {
  private _responseData: any;
  private _rawData: any;

  constructor(data: any) {
    this._responseData = data;
  }

  async getChargeRawData() {
    this._rawData = {
      name: this._responseData['name'],
      description: this._responseData['description'],
      status: this._responseData['status'],
      code: this._responseData['code'],
      amount: this._responseData['amountRequested'],
      payments: this._responseData['payments'],
      hostedUrl: this._responseData['hostedUrl'],
      createdAt: this._responseData['createdAt'],
      expiresAt: this._responseData['expiresAt'],
    };

    return this._rawData;
  }

  async getPayoutRawData() {
    this._rawData = {
      code: this._responseData['code'],
      amount: this._responseData['amount'],
      txHash: this._responseData['txHash'],
      address: this._responseData['address'],
      timeline: this._responseData['timeline'],
    };

    return this._rawData;
  }
}
