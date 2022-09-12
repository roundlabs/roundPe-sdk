export class RoundPeResourceInterface {

    private _resourceUrl: string;

    constructor(resourceUrl: string) {
        this._resourceUrl = resourceUrl;
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