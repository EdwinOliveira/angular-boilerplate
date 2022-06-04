export class SignUpDTO {
    public constructor(
        private readonly _username: string,
        private readonly _email: string,
        private readonly _password: string,
        private readonly _firstName: string,
        private readonly _lastName: string,
    ) { }

    public get username(): string {
        return this._username;
    }

    public get email(): string {
        return this._email;
    }

    public get password(): string {
        return this._password;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public get firstName(): string {
        return this._firstName;
    }
}