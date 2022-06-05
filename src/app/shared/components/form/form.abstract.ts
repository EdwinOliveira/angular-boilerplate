import { FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { FormControlModel } from "./models/form-control.model";

export abstract class AbstractForm {
    /** Properties */
    private readonly _formGroup: FormGroup = new FormGroup({});
    private readonly _formControls: Array<FormControlModel> = new Array<FormControlModel>();

    protected constructor(formControls: Array<FormControlModel>) {
        this._formControls = formControls;

        this._initializeFormGroup(formControls);
    }

    private _initializeFormGroup(formControls: Array<FormControlModel>): void {
        for (const formControl of formControls) {
            const validators: Array<ValidatorFn> = new Array<ValidatorFn>();

            for (const rule of formControl.rules) {
                validators.push(Validators[rule as keyof ValidatorFn])
            }

            this._formGroup.addControl(formControl.name, new FormControl(null, validators))
        }
    }

    public get formGroup(): FormGroup {
        return this._formGroup;
    }

    public isValid(): boolean {
        const controls = this._formGroup.controls;

        for (const formControl of this._formControls) {
            if (controls[formControl.name].touched === true && controls[formControl.name].dirty === true) {
                if (controls[formControl.name].errors !== null) {
                    return false;
                }
            }
        }

        return true;
    }

    public abstract save(): void;
}