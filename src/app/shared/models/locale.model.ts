import { LocaleCollection } from "../constants/collections/locale.collection";

export class LocaleModel {
    public constructor(
        private readonly _name: LocaleCollection,
        private readonly _path: string
    ) { }

    public get name(): LocaleCollection {
        return this._name;
    }

    public get path(): string {
        return this._path;
    }
}