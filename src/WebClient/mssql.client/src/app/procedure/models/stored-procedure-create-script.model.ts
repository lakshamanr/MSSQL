// Represents a script to create a stored procedure.
export class StoredProcedureCreateScript {
    storedProcedureName: string;
    procedureDefinition: string;
    constructor(init?: Partial<StoredProcedureCreateScript>) {
        Object.assign(this, init);
    }
}
