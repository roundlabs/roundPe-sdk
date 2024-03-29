
# RoundPe SDK

Official Nodejs Library For RoundPe API



## Installation

```javascript
npm i roundpe-sdk
```

## Documentation

Documentation of RoundPe API and their usage is available at [ RoundPe Docs ](https://docs.roundpe.com/docs/intro)

## Getting Started

First, We need to install the roundpe package than use those keys to access all roundpe api's.

### Import Sdk

```javascript
import RoundPeSDK from 'roundpe-sdk'
```

### Initialize Sdk

Instantiate the roundpe instance with x_api_Key & sharedSecret. You can obtain the keys from the dashboard app at [RoundPe](https://app.roundpe.com/settings)


```javascript
const roundpe = new RoundPeSDK({
  x_api_key: 'YOUR_API_KEY',
  sharedSecret: 'YOUR_SHARED_SECRET'
})
```

### Create Charge

A sample implementation for creating charge is shown below:

#### v1

```javascript
const chargeData = {
      name: 'John Doeo',
      description: 'Test Charge',
      localPrice: {
        amount: 100,
        currency: 'USD',
      },
      pricingType: 'fixed_price',
      withFees: true,
};

const response = await roundpeSDK.createCharge(chargeData);
```

#### Response
```javascript
{
  name: 'John Doeo',
  description: 'Test Charge',
  status: 'NEW',
  code: '73LBU2ST1G',
  amount: 100,
  payments: [],
  hostedUrl: 'https://payment.roundpe.com/charges/73LBU2ST1G',
  createdAt: '2022-12-21T05:43:14.090Z',
  expiresAt: 'Wed Dec 21 2022 05:48:14 GMT+0000 (Coordinated Universal Time)'
}
```


#### v2
```javascript
const chargeData = {
  name: 'John Doeo',
  description: 'Test Charge',
  localPrice: {
    amount: 100,
    currency: 'USD',
  },
  pricingType: 'fixed_price',
  withFees: true,
};

const response = await roundpeSDK.createCharge(chargeData, {rawData: true});

```

#### Response
```javascript
{
  pricingType: 'fixed_price',
  code: '3E7QRENFU8',
  name: 'John Doeo',
  supportedNetworks: [ 'flow' ],
  supportedTokens: { flow: [ 'flow', 'fusd', 'usd-coin', 'tusdt', 'blocto-token' ] },
  description: 'Test Charge',
  expiresAt: 'Fri Dec 16 2022 04:00:55 GMT+0000 (Coordinated Universal Time)',
  timeline: [
    {
      time: 'Fri Dec 16 2022 03:55:55 GMT+0000 (Coordinated Universal Time)',
      status: 'NEW'
    }
  ],
  status: 'NEW',
  paymentThreshold: {
    overpaymentAbsoluteThreshold: { amount: 0, currency: 'USD' },
    overpaymentRelativeThreshold: 1,
    underpaymentAbsoluteThreshold: { amount: 0, currency: 'USD' },
    underpaymentRelativeThreshold: 1
  },
  pricing: {
    local: { currency: 'USD', amount: 101 },
    flow: { amount: '113.587', currency: 'flow', exchangeRate: 0.8892 },
    fusd: { amount: '101.00', currency: 'fusd', exchangeRate: 1 },
    'usd-coin': { amount: '101.00', currency: 'usd-coin', exchangeRate: 1 },
    tusdt: { amount: '101.000000', currency: 'tusdt', exchangeRate: 1 },
    'blocto-token': {
      amount: '3255.657724',
      currency: 'blocto-token',
      exchangeRate: 0.031
    }
  },
  addresses: { flow: '0x2b4c5251b1d55a25' },
  feeAmount: 1,
  amountRequested: 100,
  payments: [],
  createdAt: '2022-12-16T03:55:55.940Z',
  updatedAt: '2022-12-16T03:55:55.940Z',
  hostedUrl: 'https://payment.roundpe.com/charges/73LBU2ST1G',
  networkInfo: {
    flow: {
      name: 'Flow (Testnet)',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/flow.webp',
      explorerURL: 'https://testnet.flowscan.org/transaction/'
    }
  },
  uniqueTokenInfo: {
    'usd-coin': {
      name: 'USD Coin',
      symbol: 'USDC',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/usd-coin.webp'
    },
    flow: {
      name: 'Flow',
      symbol: 'FLOW',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/flow.webp'
    },
    fusd: {
      name: 'Flow USD',
      symbol: 'FUSD',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/fusd.webp'
    },
    'blocto-token': {
      name: 'Blocto Token',
      symbol: 'BLT',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/blocto.webp'
    },
    tusdt: {
      name: 'Teleported Tether',
      symbol: 'tUSDT',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/tusdt.webp'
    }
  }
}
```


### Get Charge

This Api is used to get the details of the charge, Charge code length should be 10 characters, 
Their are two version of get charge api.

#### v1
This api will return the complete JSON object of charge details.
```javascript
const chargeCode = "73LBU2ST1G";
const response = await roundpeSDK.getCharge(chargeCode);
```
#### Response

```javascript
{
  name: 'John Doeo',
  description: 'Test Charge',
  status: 'NEW',
  code: '73LBU2ST1G',
  amount: 100,
  payments: [],
  hostedUrl: 'https://payment.roundpe.com/charges/73LBU2ST1G',
  createdAt: '2022-12-21T05:43:14.090Z',
  expiresAt: 'Wed Dec 21 2022 05:48:14 GMT+0000 (Coordinated Universal Time)'
}
```

#### v2

This Api is used to return the rawData data in response, you need to pass rawData as true, By default it is false.
```javascript
const chargeCode = "73LBU2ST1G";
const options = { rawData: true }

const response = await roundpeSDK.getCharge(chargeCode, options);
```

#### Response
```javascript
{
  pricingType: 'fixed_price',
  code: '73LBU2ST1G',
  name: 'John Doeo',
  supportedNetworks: [ 'flow' ],
  supportedTokens: { flow: [ 'flow', 'fusd', 'usd-coin', 'tusdt', 'blocto-token' ] },
  description: 'Test Charge',
  expiresAt: 'Fri Dec 16 2022 04:00:55 GMT+0000 (Coordinated Universal Time)',
  timeline: [
    {
      time: 'Fri Dec 16 2022 03:55:55 GMT+0000 (Coordinated Universal Time)',
      status: 'NEW'
    }
  ],
  status: 'NEW',
  paymentThreshold: {
    overpaymentAbsoluteThreshold: { amount: 0, currency: 'USD' },
    overpaymentRelativeThreshold: 1,
    underpaymentAbsoluteThreshold: { amount: 0, currency: 'USD' },
    underpaymentRelativeThreshold: 1
  },
  pricing: {
    local: { currency: 'USD', amount: 101 },
    flow: { amount: '113.587', currency: 'flow', exchangeRate: 0.8892 },
    fusd: { amount: '101.00', currency: 'fusd', exchangeRate: 1 },
    'usd-coin': { amount: '101.00', currency: 'usd-coin', exchangeRate: 1 },
    tusdt: { amount: '101.000000', currency: 'tusdt', exchangeRate: 1 },
    'blocto-token': {
      amount: '3255.657724',
      currency: 'blocto-token',
      exchangeRate: 0.031
    }
  },
  addresses: { flow: '0x2b4c5251b1d55a25' },
  feeAmount: 1,
  amountRequested: 100,
  payments: [],
  createdAt: '2022-12-16T03:55:55.940Z',
  updatedAt: '2022-12-16T03:55:55.940Z',
  hostedUrl: 'https://payment.roundpe.com/charges/73LBU2ST1G'
}
```


### Create Payout

A sample implementation for creating payout is shown below:
```javascript
const payoutData = {
  network: 'solana',
  token: 'usd-coin',
  address: 'Er8NhueQfM66HsCqzk5VpDpTi5rE9Kvuo5xJ6SA1ALAV',
  amount: 5,
  metadata: {
    orderId: 'ABC123',
  },
};

const response = await roundpeSDK.createPayout(payoutData);
```
#### Response
```javascript
{ 
  code: 'D7MMVV3N' 
}
```
### Get Payout

This API can be used to get the details of a payout, Their are two versions of getPayout.

#### v1
This api will return the complete JSON object of payout details.

```javascript
const payoutCode = "D7MMVV3N"
const response = await roundpeSDK.getPayout(payoutCode);
```
#### Response
```javascript
{
  code: 'D7MMVV3N',
  amount: 5,
  txHash: '9fd51774540f625af672c1f68d06f3408d40e0aba03da8d86a67db4d04e17228',
  address: '0xed7673037e9c28f0',
  timeline: [
    {
      time: 'Wed Oct 19 2022 11:44:30 GMT+0000 (Coordinated Universal Time)',
      status: 'PENDING'
    },
    {
      time: 'Wed Oct 19 2022 11:44:50 GMT+0000 (Coordinated Universal Time)',
      status: 'COMPLETED'
    }
  ]
}
```


#### v2
This Api is used to return the payout raw data in response, you need to pass rawData as true, By default it is false.

```javascript
const options = { rawData: true }
const payoutCode = "D7MMVV3N"
const response = await roundpeSDK.getPayout(payoutCode);
```
#### Response
```javascript
{
  code: 'D7MMVV3N',
  amount: 5,
  token: 'usd-coin',
  address: '0xed7673037e9c28f0',
  network: 'flow',
  timeline: [
    {
      time: 'Wed Oct 19 2022 11:27:02 GMT+0000 (Coordinated Universal Time)',
      status: 'PENDING'
    },
    {
      time: 'Wed Oct 19 2022 11:27:22 GMT+0000 (Coordinated Universal Time)',
      status: 'COMPLETED'
    }
  ],
  txStatus: 'COMPLETED',
  createdAt: '2022-10-19T11:27:02.642Z',
  updatedAt: '2022-10-19T11:27:22.689Z',
  txHash: '3fef726a18c924699c3fbbf65115992f138bb2d1fd0f0ca469d193ac6f88be3e'
}
```

### Get Payout Available Token

```javascript
const response = await roundpeSDK.getPayoutAvailableTokensInfo();
```
#### Response
```javascript
{
  supportedTokens: {
    flow: [ 'fusd', 'tusdt', 'usd-coin' ],
    bsc: [ 'busd', 'tether', 'usd-coin' ],
    goerli: [ 'dai', 'tether', 'usd-coin' ],
    avalanche: [ 'usd-coin', 'tether', 'dai' ],
    fantom: [ 'usd-coin', 'dai', 'magic-internet-money' ],
    matic: [ 'usd-coin', 'dai', 'tether' ],
    solana: [ 'usd-coin', 'tether' ]
  },
  networkInfo: {
    matic: {
      name: 'Polygon (Matic)',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/polygon.svg',
      explorerURL: 'https://polygonscan.com/tx/'
    },
    flow: {
      name: 'Flow (Testnet)',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/flow.webp',
      explorerURL: 'https://testnet.flowscan.org/transaction/'
    },
    solana: {
      name: 'Solana (Devnet)',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/solana.webp',
      explorerURL: 'https://solscan.io/tx/',
      suffix: '?cluster=devnet'
    },
    fantom: {
      name: 'Fantom',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/fantom.webp',
      explorerURL: 'https://ftmscan.com/tx/'
    },
    avalanche: {
      name: 'Avalanche',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/avalanche.webp',
      explorerURL: 'https://snowtrace.io/tx/'
    },
    bsc: {
      name: 'Binance Smart Chain',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/binance.webp',
      explorerURL: 'https://bscscan.com/tx/'
    },
    goerli: {
      name: 'Goerli',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/ethereum.webp',
      explorerURL: 'https://goerli.etherscan.io/tx/'
    }
  },
  uniqueTokenInfo: {
    'usd-coin': {
      name: 'USD Coin',
      symbol: 'USDC',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/usd-coin.webp'
    },
    busd: {
      name: 'Binance USD',
      symbol: 'BUSD',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/busd.webp'
    },
    dai: {
      name: 'DAI',
      symbol: 'DAI',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/dai.webp'
    },
    tether: {
      name: 'Tether',
      symbol: 'USDT',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/tether.webp'
    },
    fusd: {
      name: 'Flow USD',
      symbol: 'FUSD',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/fusd.webp'
    },
    tusdt: {
      name: 'Teleported Tether',
      symbol: 'tUSDT',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/tusdt.webp'
    },
    'magic-internet-money': {
      name: 'Magic Internet Money',
      symbol: 'MIM',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/magic-internet-money.webp'
    }
  }
}
```

### Get Payout Fees


```javascript
const response = await roundpeSDK.getPayoutFees();
```
#### Response
```javascript
{
  matic: 0.1,
  flow: 0.1,
  solana: 0.1,
  arbitrum: 0.1,
  fantom: 0.1,
  avalanche: 0.1,
  bsc: 0.1,
  goerli: 0.1,
  ethereum: 1.5
}
```

### Get Status

```javascript
const response = await roundpeSDK.getStatus();
```
#### Response
```javascript
{ 
  maintenanceOn: false 
}
```

### Get Available Token Info

This API returns the networks and tokens available for accepting payments.
```javascript
const response = await roundpeSDK.getAvailableTokensInfo();
```
#### Response
```javascript
{
  networkInfo: {
    matic: {
      name: 'Polygon (Matic)',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/polygon.svg',
      explorerURL: 'https://polygonscan.com/tx/'
    },
    flow: {
      name: 'Flow (Testnet)',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/flow.webp',
      explorerURL: 'https://testnet.flowscan.org/transaction/'
    },
    solana: {
      name: 'Solana (Devnet)',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/solana.webp',
      explorerURL: 'https://solscan.io/tx/',
      suffix: '?cluster=devnet'
    },
    arbitrum: {
      name: 'Arbitrum',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/arbitrum.svg',
      explorerURL: 'https://arbiscan.io/tx/'
    },
    fantom: {
      name: 'Fantom',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/fantom.webp',
      explorerURL: 'https://ftmscan.com/tx/'
    },
    avalanche: {
      name: 'Avalanche',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/avalanche.webp',
      explorerURL: 'https://snowtrace.io/tx/'
    },
    bsc: {
      name: 'Binance Smart Chain',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/binance.webp',
      explorerURL: 'https://bscscan.com/tx/'
    },
    goerli: {
      name: 'Goerli',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/ethereum.webp',
      explorerURL: 'https://goerli.etherscan.io/tx/'
    },
    ethereum: {
      name: 'Ethereum Mainnet',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/ethereum.webp',
      explorerURL: 'https://etherscan.io/tx/'
    }
  },
  uniqueTokenInfo: {
    'usd-coin': {
      name: 'USD Coin',
      symbol: 'USDC',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/usd-coin.webp'
    },
    gari: {
      name: 'Gari Network',
      symbol: 'GARI',
      logoURI: 'https://assets.coingecko.com/coins/images/22615/small/gari.png'
    },
    busd: {
      name: 'Binance USD',
      symbol: 'BUSD',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/busd.webp'
    },
    bnb: {
      name: 'BNB',
      symbol: 'BNB',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/bnb.webp'
    },
    'avalanche-2': {
      name: 'Avalanche',
      symbol: 'AVAX',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/avalanche.webp'
    },
    ethereum: {
      name: 'Ether',
      symbol: 'ETH',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/ethereum.webp'
    },
    dai: {
      name: 'DAI',
      symbol: 'DAI',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/dai.webp'
    },
    tether: {
      name: 'Tether',
      symbol: 'USDT',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/tether.webp'
    },
    weth: {
      name: 'Wrapped Ether',
      symbol: 'WETH',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/weth.webp'
    },
    'matic-network': {
      name: 'Matic',
      symbol: 'MATIC',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/wmatic.webp'
    },
    wmatic: {
      name: 'Wrapped Matic',
      symbol: 'WMATIC',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/wmatic.webp'
    },
    flow: {
      name: 'Flow',
      symbol: 'FLOW',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/flow.webp'
    },
    fusd: {
      name: 'Flow USD',
      symbol: 'FUSD',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/fusd.webp'
    },
    'blocto-token': {
      name: 'Blocto Token',
      symbol: 'BLT',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/blocto.webp'
    },
    tusdt: {
      name: 'Teleported Tether',
      symbol: 'tUSDT',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/tusdt.webp'
    },
    solana: {
      name: 'Solana',
      symbol: 'SOL',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/solana.webp'
    },
    wsolana: {
      name: 'Wrapped Solana',
      symbol: 'WSOL',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/solana.webp'
    },
    'magic-internet-money': {
      name: 'Magic Internet Money',
      symbol: 'MIM',
      logoURI: 'https://d3ptetvk5kgkx3.cloudfront.net/magic-internet-money.webp'
    }
  },
  tokenAddresses: {
    arbitrum: {
      'usd-coin': [Object],
      ethereum: [Object],
      dai: [Object],
      tether: [Object],
      weth: [Object]
    },
    matic: {
      'usd-coin': [Object],
      dai: [Object],
      tether: [Object],
      'matic-network': [Object],
      wmatic: [Object],
      weth: [Object]
    },
    flow: {
      flow: [Object],
      fusd: [Object],
      'usd-coin': [Object],
      tusdt: [Object],
      'blocto-token': [Object]
    },
    avalanche: {
      'usd-coin': [Object],
      tether: [Object],
      dai: [Object],
      'magic-internet-money': [Object],
      'avalanche-2': [Object]
    },
    bsc: {
      'usd-coin': [Object],
      bnb: [Object],
      busd: [Object],
      tether: [Object]
    },
    goerli: {
      ethereum: [Object],
      'usd-coin': [Object],
      tether: [Object],
      dai: [Object]
    },
    solana: { solana: [Object], 'usd-coin': [Object], tether: [Object] },
    fantom: {
      'usd-coin': [Object],
      dai: [Object],
      'magic-internet-money': [Object]
    }
  }
}
```

### Verify Webhook

Webhooks are secured and can be verified for source and message integrity by using the Shared Secret and request data in the webhook notification
For the above data, the x-webhook-signature header contains the checksum. A sample implementation for Node.js to verify the data is shown below:

eventData response JSON :

```javascript
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

```javascript
const checkSum = "X-WEBHOOK-SIGNATURE";
const response = await roundpeSDK.verifyChecksum(eventData, checkSum);
```
