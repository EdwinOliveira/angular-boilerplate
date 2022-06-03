import { AbstractResponse } from "../../abstracts/response.abstract";

export class CreateResponseModel<T> extends AbstractResponse<T> {

    private readonly _newResourceURL: string;

    public constructor(
        resourceId: string,
        newResourceURL: string,
        resourceArgs: T | null,
    ) {
        super(resourceId, resourceArgs);

        this._newResourceURL = newResourceURL;
    }

    public get newResourceURL(): string {
        return this._newResourceURL;
    }
}