import { SqlServerProperty } from './sql-server-property';
import { DatabaseInfo }from './database-info'
import { RegistryProperty } from './registry-property';

export class DatabaseServerProperties {
    serverProperties: SqlServerProperty[];
    databaseInfos: DatabaseInfo[];
    registryProperties: RegistryProperty[];

    constructor(serverProperties: SqlServerProperty[], databaseInfos: DatabaseInfo[], registryProperties: RegistryProperty[]) {
        this.serverProperties = serverProperties;
        this.databaseInfos = databaseInfos;
        this.registryProperties = registryProperties;
    }
}