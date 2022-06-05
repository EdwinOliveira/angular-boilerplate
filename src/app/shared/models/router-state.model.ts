export class RouterStateModel {
    public constructor(
        private readonly _navbarState: boolean,
        private readonly _contentState: boolean,
        private readonly _footerState: boolean,
    ) { }

    public get navbarState(): boolean {
        return this._navbarState;
    }

    public get contentState(): boolean {
        return this._contentState;
    }

    public get footerState(): boolean {
        return this._footerState;
    }
}