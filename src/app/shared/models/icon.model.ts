import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export class IconModel {
    public constructor(
        private readonly _name: string,
        private readonly _definition: IconDefinition
    ) { }

    public get name(): string {
        return this._name;
    }

    public get definition(): IconDefinition {
        return this._definition;
    }
}