import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalizationService } from './core/services/localization/localization.service';
import { LocalStorageService } from './core/services/storage/local-storage/local-storage.service';
import { LayoutModule } from './layout/layout.module';
import { PublicModule } from './public/public.module';
import { AbstractStorageService } from './shared/abstracts/storage.service.abstract';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    PublicModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: LocalizationService.httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FontAwesomeModule
  ],
  providers: [
    TranslateStore,
    { provide: AbstractStorageService, useClass: LocalStorageService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
