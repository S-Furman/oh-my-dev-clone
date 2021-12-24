export class User {
  constructor(
    public email: string,
    public id: string,
    private tok: string,
    private tokExpirationDate: Date) {
  }
  get token(): string|null {
    if ((!this.tokExpirationDate || new Date()) < this.tokExpirationDate ) {
      return null;
    }
    return this.token;
  }
}
