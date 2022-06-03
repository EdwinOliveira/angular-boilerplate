import { AbstractResponse } from "../../abstracts/response.abstract";

export class UpdateResponseModel<T> extends AbstractResponse<T> {

    private readonly _oldResourceURL: string;
    private readonly _newResourceURL: string;

    public constructor(
        resourceId: string,
        oldResourceURL: string,
        newResourceURL: string,
        resourceArgs: T | null,
    ) {
        super(resourceId, resourceArgs);

        this._oldResourceURL = oldResourceURL;
        this._newResourceURL = newResourceURL;
    }

    public get oldResourceURL(): string {
        return this._oldResourceURL;
    }

    public get newResourceURL(): string {
        return this._newResourceURL;
    }
}