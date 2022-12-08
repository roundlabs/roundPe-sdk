export class RoundPeResourceInterface {

    private _resourceUrl: string;

    constructor(resourceUrl: string) {
        this._resourceUrl = resourceUrl;
        console.log("resourceUrl : ", this._resourceUrl);
    }
    
    protected get resourceUrl(): string {
        return this._resourceUrl;
    }
    
    protected get MISSING_ID_ERROR(): string {
        return `${this.resourceUrl.split('/')[0]} ID is mandatory`;
    }

    protected FIELD_MANDATORY_ERROR(field: string): string {
        return `${field} is mandatory`;
    }   
}

export interface IRoundPeCreateCharge {
    name: string,
    description: string
    localPrice: {
      amount: number,
      currency: string,
    };
    pricingType: string,
    withFees: boolean,
}

export interface IGetFeesFromAmount {
    amount: number,
    withFees?: boolean,
}

export interface IRoundPeConfig {
    'x-api-key': string,
    "sharedSecret": string,
}

export interface IWebhookData {
    id: string,
    apiVersion: number,
    createdAt: string,
    type: string,
    data: {
      Message: string, 
    }
};

export interface ICreatePayout {
    network: string,
    token: string,
    address: string,
    amount: 5,
    metadata: {
        orderId: string
    }
}
