export class FormControlModel {
    public constructor(
        private readonly _name: string,
        private readonly _rules: Array<string>,
    ) { }

    public get name(): string {
        return this._name;
    }

    public get rules(): Array<string> {
        return this._rules;
    }
}