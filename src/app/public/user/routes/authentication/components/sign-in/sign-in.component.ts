import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'src/app/shared/components/form/form.abstract';
import { FormControlModel } from 'src/app/shared/components/form/models/form-control.model';
import { AuthenticationLocaleService } from '../../services/authentication-locale/authentication-locale.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent extends AbstractForm implements OnInit {

  constructor(
    private readonly _authenticationLocaleService: AuthenticationLocaleService,
  ) {
    super([
      new FormControlModel("email", new Array<string>("required")),
      new FormControlModel("password", new Array<string>("required")),
    ])
  };

  ngOnInit(): void { }

  public get authenticationLocaleService(): AuthenticationLocaleService {
    return this._authenticationLocaleService;
  }

  public override save(): void { }
}
