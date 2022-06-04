export class RefreshTokenDTO {
    public constructor(
        private readonly _userId: string,
        private readonly _refreshToken: string
    ) { }

    public get refreshToken(): string {
        return this._refreshToken;
    }

    public get userId(): string {
        return this._userId;
    }
}