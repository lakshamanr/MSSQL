import { UserDefinedDataTypeReference } from "./UserDefinedDataTypeReference";
export interface UserDefinedDataType {
    name: string;
    allowNulls: boolean;
    baseTypeName: string;
    length: number;
    createScript: string;
    description: string;
    userDefinedDataTypeReference: UserDefinedDataTypeReference[];
}
