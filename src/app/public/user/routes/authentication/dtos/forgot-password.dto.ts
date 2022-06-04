export class ForgotPasswordDTO {
    public constructor(
        private readonly _email: string,
    ) { }

    public get email(): string {
        return this._email;
    }
}