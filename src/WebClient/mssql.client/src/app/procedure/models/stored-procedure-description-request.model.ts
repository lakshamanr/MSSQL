// Represents a request to describe a stored procedure.
export class StoredProcedureDescriptionRequest {
    schemaName: string;
    storedProcedureName: string;
    description: string;
    constructor(init?: Partial<StoredProcedureDescriptionRequest>) {
        Object.assign(this, init);
    }
}
