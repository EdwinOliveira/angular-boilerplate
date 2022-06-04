export class SignOutDTO {
    public constructor(
        private readonly _userId: string,
    ) { }

    public get userId(): string {
        return this._userId;
    }
}