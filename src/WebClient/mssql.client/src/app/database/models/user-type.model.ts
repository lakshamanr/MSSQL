
export class UserType {
  userTypeName: string;

  constructor(data: any) {
    this.userTypeName = data.userTypeName || '';
  }
}
