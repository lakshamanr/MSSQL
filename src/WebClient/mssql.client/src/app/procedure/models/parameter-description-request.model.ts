// Represents a request to describe a parameter.
export class ParameterDescriptionRequest {
    schemaName: string;
    storedProcedureName: string;
    parameterName: string;
    description: string;
    constructor(init?: Partial<ParameterDescriptionRequest>) {
        Object.assign(this, init);
    }
}
