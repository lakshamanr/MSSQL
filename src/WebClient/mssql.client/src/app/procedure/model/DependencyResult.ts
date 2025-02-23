// Represents the result of a dependency check between objects.
export class DependencyResult {
    referencingObjectName: string;
    referencingObjectType: string;
    referencedObjectName: string;
    constructor(init?: Partial<DependencyResult>) {
        Object.assign(this, init);
    }
}
