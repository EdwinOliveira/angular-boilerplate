import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http/http.service';
import { LocalStorageService } from './services/storage/local-storage/local-storage.service';
import { CookieStorageService } from './services/storage/cookie-storage/cookie-storage.service';
import { SessionStorageService } from './services/storage/session-storage/session-storage.service';
import { HttpClientModule } from "@angular/common/http";
import { ThemeService } from './services/theme/theme.service';
import { AbstractStorageService } from '../shared/abstracts/storage.service.abstract';


@NgModule({
  declarations: [],
  providers: [
    HttpService,
    LocalStorageService,
    CookieStorageService,
    SessionStorageService,
    ThemeService,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
