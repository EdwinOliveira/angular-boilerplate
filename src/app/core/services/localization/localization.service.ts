import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AbstractStorageService } from 'src/app/shared/abstracts/storage.service.abstract';
import { LangCollection } from 'src/app/shared/constants/collections/lang.collection';
import { TokenCollection } from 'src/app/shared/constants/collections/token.collection';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor(
    private readonly _translateService: TranslateService,
    private readonly _storageService: AbstractStorageService,
  ) { }

  public initializeLanguage(): void {
    const langToken = this._storageService.fetchToken<LangCollection>(TokenCollection.LANG);
    const langToUse = langToken !== null ? langToken : navigator.language.split("-")[0] as LangCollection;

    this.updateLanguage(langToUse);
  }

  public updateLanguage(langToUse: LangCollection): void {
    this._translateService.use(langToUse).subscribe(() => {
      this._storageService.createToken(TokenCollection.LANG, langToUse);
      this._translateService.reloadLang(langToUse);
    });
  }

  public static httpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
  }
}
