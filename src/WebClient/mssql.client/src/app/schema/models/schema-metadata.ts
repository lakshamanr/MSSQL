import { SchemaDescription } from './schema-description';

import { SchemaOwner } from './schema-owner';

import { SchemaObject } from './schema-object';

 
export class SchemaMetadata {
  description: SchemaDescription;
  owner: SchemaOwner;
  script?: string;
  objectsUsedBySchemaAsync: SchemaObject[];
}
