import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'src/app/shared/components/form/form.abstract';
import { FormControlModel } from 'src/app/shared/components/form/models/form-control.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent extends AbstractForm implements OnInit {

  constructor() {
    super([
      new FormControlModel("email", new Array<string>("required")),
      new FormControlModel("password", new Array<string>("required")),
    ])
  };

  ngOnInit(): void { }

  public override save(): void { }
}
