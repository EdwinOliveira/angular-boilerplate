import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    PublicComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
