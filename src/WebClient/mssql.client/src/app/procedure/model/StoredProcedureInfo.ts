// Represents information about a stored procedure.
export class StoredProcedureInfo {
    storedProcedure: string;
    extendedProperty: string;
    constructor(init?: Partial<StoredProcedureInfo>) {
        Object.assign(this, init);
    }
}
