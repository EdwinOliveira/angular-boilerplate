import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateModule,
    CoreModule
  ],
  exports: [
    FontAwesomeModule,
    TranslateModule,
    CoreModule
  ]
})
export class SharedModule { }
