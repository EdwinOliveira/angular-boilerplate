import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateModule,
    CoreModule,
    ReactiveFormsModule
  ],
  exports: [
    FontAwesomeModule,
    TranslateModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
