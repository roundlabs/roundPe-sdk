export const ENV = {
  DEV: 'dev',
  STAGE: 'stage',
  PROD: 'prod',
};

export const BASE_URL = {
  DEV: 'https://dev-api.round.xyz/',
  STAGE: 'https://dev-api.round.xyz/',
  PROD: 'https://dev-api.round.xyz/',
};

export const constant = {
  CHARGES: 'charges',
  STATUS: 'status',
  GET_FEES_FROM_AMOUNT: 'getFeesFromAmount',
  GET_AVAILABLE_TOKENS_INFO: 'getAvailableTokensInfo',
  CREATE_PAYOUT: 'createPayouts',
  GET_PAYOUT: 'getPayout',
  GET_PAYOUT_AVAILABLE_TOKENS_INFO: 'getPayoutAvailableTokensInfo',
  GET_PAYOUT_FEES: 'getPayoutFees',
  GET_TOKEN_NETWORK_INFO: 'getTokenNetworkInfo',
  VERSION: 'v1/',
  VERIFIED: 'verified',
};

export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
 }