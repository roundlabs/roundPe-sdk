export class ResponseData {
  private _rawDataFlag: boolean;
  private _responseData: any;
  private _rawData: any;

  constructor(options: any, data: any) {
    this._rawDataFlag = options['rawData'];
    this._responseData = data;
  }

  async getRawData() {
    if (this._rawDataFlag) {
      this._rawData = {
        name: this._responseData['name'],
        code: this._responseData['code'],
        amount: this._responseData['amount'],
        status: this._responseData['status'],
        hosted_url: this._responseData['hosted_url'],
      };
    }
    return this._rawData;
  }
}
