export class UserModule {
    public constructor(
        private readonly _userId: string,
        private readonly _username: string,
        private readonly _email: string,
        private readonly _password: string,
        private readonly _firstName: string,
        private readonly _lastName: string,
        private readonly _hashedRefreshToken: string,
        private readonly _createdAt: Date,
        private readonly _updatedAt: Date,
    ) { }

    public get userId(): string {
        return this._userId;
    }

    public get username(): string {
        return this._username;
    }

    public get email(): string {
        return this._email;
    }

    public get password(): string {
        return this._password;
    }

    public get updatedAt(): Date {
        return this._updatedAt;
    }

    public get createdAt(): Date {
        return this._createdAt;
    }

    public get hashedRefreshToken(): string {
        return this._hashedRefreshToken;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public get firstName(): string {
        return this._firstName;
    }
}