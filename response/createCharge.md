
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
    hostedUrl: 'https://pv-payment-ui.vercel.app/charges/3E7QRENFU8',
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