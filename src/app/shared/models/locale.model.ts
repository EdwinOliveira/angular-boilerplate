export class LocaleModel {
    public constructor(
        private readonly _name: string,
        private readonly _path: string
    ) { }

    public get name(): string {
        return this._name;
    }

    public get path(): string {
        return this._path;
    }
}