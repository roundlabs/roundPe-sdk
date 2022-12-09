
# RoundPe SDK

Official Nodejs Library For RoundPe API



## Installation

```bash
npm i roundpe-sdk
```

## Documentation

Documentation of RoundPe API and their usage is available at https://docs.roundpe.com/docs/intro

## Getting Started

First, We need to install the roundpe package than use those keys to access all roundpe api's

Instantiate the roundpe instance with x_api_key & sharedSecret. You can obtain the keys from the dashboard app at https://app.roundpe.com/settings

### Import Sdk

```bash
import RoundPeSDK from 'roundpe-sdk'
```

### Initialize Sdk

Instantiate the roundpe instance with x_api_Key & sharedSecret. You can obtain the keys from the dashboard app at https://app.roundpe.com/settings


```bash
const roundpe = new RoundPeSDK({
  x_api_key: 'YOUR_API_KEY',
  sharedSecret: 'YOUR_SHARED_SECRET'
})
```

### Create Charge

A sample implementation for creating charge is shown below:

```bash
const charge = {
  name: 'John Doeo',
  description: 'Test Charge',
  localPrice: {
    amount: 100,
    currency: 'USD',
  },
  pricingType: 'fixed_price',
  withFees: true,
};

const response = await roundpe.createCharge(charge);
```
### Get Charge

This Api is used to get the details of the charge, Charge code length should be 10 characters, 
Their are two version of get charge api.

#### v1
This api will return the complete JSON object of charge details.
```bash
const chargeCode = "B8A3FJPAP9";
const response = await roundpe.getCharge(chargeCode);
```

#### v2

This Api is used to return the charge raw data in response, you need to pass rawData as true, By default it is false.
```bash
const chargeCode = "B8A3FJPAP9";
const options = { rawData: true }
const response = await roundpe.getCharge(chargeCode, options);
```
### Create Payout

A sample implementation for creating payout is shown below:
```bash
const payoutData = {
  network: 'solana',
  token: 'usd-coin',
  address: 'Er8NhueQfM66HsCqzk5VpDpTi5rE9Kvuo5xJ6SA1ALAV',
  amount: 5,
  metadata: {
    orderId: 'ABC123',
  },
};

const response = await roundpe.createPayout(payoutData);
```
### Get Payout

This API can be used to get the details of a payout, Their are two versions of getPayout.

#### v1
This api will return the complete JSON object of payout details.

```bash
const payoutCode = "7JR2Z925"
const response = await roundpe.getPayout(payoutCode);
```

#### v2
This Api is used to return the payout raw data in response, you need to pass rawData as true, By default it is false.

```bash
const options = { rawData: true }
const payoutCode = "7JR2Z925"
const response = await roundpe.getPayout(payoutCode);
```

### Get Payout Available Token

```bash
const response = await roundpe.getPayoutAvailableTokensInfo();
```
### Get Payout Fees


```bash
const response2 = await roundpe.getPayoutFees();

```
### Get Status

```bash
const response3 = await roundpe.getStatus();

```
### Get Available Token Info

This API returns the networks and tokens available for accepting payments.
```bash
const response = await roundpe.getAvailableTokensInfo();
```
### Verify Webhook

Webhooks are secured and can be verified for source and message integrity by using the Shared Secret and request data in the webhook notification
For the above data, the x-webhook-signature header contains the checksum. A sample implementation for Node.js to verify the data is shown below:

eventData response JSON :

```bash
const eventData = {
  "id": "39d82189-96fa-4089-9884-7a815ac8caee",
  "apiVersion": 1,
  "createdAt": "Thu May 26 2022 08:09:34 GMT+0000 (Coordinated Universal Time)",
  "type": "charge:completed",
  "data": {
    "Message": "testing webhook", 
  }
}

```
For the above data, the x-webhook-signature header contains the checksum. In case of sucess it will return 'VERIFIED' otherwise 'NOT VERIFIED' , A sample implementation for Node.js to verify the data, 

```bash
const checkSum = "X-WEBHOOK-SIGNATURE";
const response = await roundpe.verifyChecksum(eventData, checkSum);
```
