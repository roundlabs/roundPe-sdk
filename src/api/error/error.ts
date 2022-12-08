import { HttpStatusCode } from '../../constants/constant';

export class Base_Error extends Error {
private errors: any;
private date: Date;
private statusCode;

  constructor(errors = [], ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, Base_Error);
    }

    this.message = params[0];
    this.name = 'Error';
    this.errors = errors;
    this.date = new Date();

  }

}
