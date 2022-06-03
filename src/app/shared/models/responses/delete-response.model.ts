import { AbstractResponse } from "../../abstracts/response.abstract";

export class DeleteResponseModel<T> extends AbstractResponse<T> {

    private readonly _oldResourceURL: string;

    public constructor(
        resourceId: string,
        oldResourceURL: string,
        resourceArgs: T | null,
    ) {
        super(resourceId, resourceArgs);

        this._oldResourceURL = oldResourceURL;
    }

    public get oldResourceURL(): string {
        return this._oldResourceURL;
    }

}