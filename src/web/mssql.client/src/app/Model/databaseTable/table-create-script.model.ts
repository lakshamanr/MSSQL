export class TableCreateScript {
    createScript!: string;

    constructor(data?: any) {
        if (data) {
            this.createScript = data.createScript;
        }
    }
}