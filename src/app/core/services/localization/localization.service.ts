import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor() { }

  public static httpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
  }
}
