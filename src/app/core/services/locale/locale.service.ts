import { Injectable } from '@angular/core';
import { LocaleCollection } from 'src/app/shared/constants/collections/locale.collection';
import { LocaleModel } from 'src/app/shared/models/locale.model';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private readonly _locales: Array<LocaleModel>;

  constructor() {
    this._locales = new Array<LocaleModel>(
      new LocaleModel(LocaleCollection.BRAND, "COMMON.BRAND"),
    )
  }

  private _fetchLocalePathByName(name: LocaleCollection): string | null {
    const locale = this._locales.find((locale) => locale.name.match(name));

    return locale !== undefined ? locale.path : null;
  }

  /** Locales */

  public get brandLocale(): string {
    return this._fetchLocalePathByName(LocaleCollection.BRAND) ?? "COMMON.TEMPLATE";
  }

}
