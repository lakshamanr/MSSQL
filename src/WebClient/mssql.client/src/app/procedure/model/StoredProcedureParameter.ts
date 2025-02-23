// Represents a parameter for a stored procedure.
export class StoredProcedureParameter {
    id: number;
    parameterName: string;
    type: string;
    length: number;
    precision: number;
    scale: number;
    parameterOrder: number;
    collation: string;
    extendedProperty: string;
    isEditing: boolean;
    constructor(init?: Partial<StoredProcedureParameter>) {
        Object.assign(this, init);
    }
}
