import { Injectable } from '@angular/core';
import { LocaleModel } from 'src/app/shared/models/locale.model';
import { AuthenticationLocaleCollection } from '../../constants/authentication-locale.collection';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationLocaleService {

  private readonly _locales: Array<LocaleModel>;

  constructor() {
    this._locales = new Array<LocaleModel>(
      new LocaleModel(AuthenticationLocaleCollection.EMAIL, "CONTENT.PUBLIC.USER.AUTHENTICATION.SIGN_IN.EMAIL.LABEL"),
      new LocaleModel(AuthenticationLocaleCollection.PASSWORD, "CONTENT.PUBLIC.USER.AUTHENTICATION.SIGN_IN.PASSWORD.LABEL"),
    )
  }

  private _fetchLocalePathByName(name: AuthenticationLocaleCollection): string | null {
    const locale = this._locales.find((locale) => locale.name.match(name));

    return locale !== undefined ? locale.path : null;
  }

  /** Locales */

  public get emailLocale(): string {
    return this._fetchLocalePathByName(AuthenticationLocaleCollection.EMAIL) ?? "COMMON.TEMPLATE";
  }

  public get passwordLocale(): string {
    return this._fetchLocalePathByName(AuthenticationLocaleCollection.PASSWORD) ?? "COMMON.TEMPLATE";
  }
}
