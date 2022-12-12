
class normalizeError extends Error {
    private _error: any;
    private _errorMessage: any;

    constructor(error: any) {
    super(error);
  }

 async generalizeError() {

 }

 async maintananceError() {
        this._errorMessage = "Server is under maintenance. Please try again later."
        return this.sendError(this._errorMessage);
 }


 async sendError(message: string) {
        return {
            status: false,
            message: message
        }
 }

}