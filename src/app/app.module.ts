import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStorageService } from './core/services/storage/local-storage/local-storage.service';
import { LayoutModule } from './layout/layout.module';
import { PublicModule } from './public/public.module';
import { AbstractStorageService } from './shared/abstracts/storage.service.abstract';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    PublicModule
  ],
  providers: [
    { provide: AbstractStorageService, useClass: LocalStorageService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
