import { UserDefinedDataTypeReference } from "./user-defined-data-type-reference.model";
export interface UserDefinedDataType {
    name: string;
    allowNulls: boolean;
    baseTypeName: string;
    length: number;
    createScript: string;
    description: string;
    userDefinedDataTypeReference: UserDefinedDataTypeReference[];
}
