import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { RefreshTokenComponent } from './components/refresh-token/refresh-token.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AbstractAuthenticationService } from './authentication-service.abstract';
import { AuthenticationService } from './services/authentication/authentication.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    SignOutComponent,
    RefreshTokenComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
  ],
  providers: [
    { provide: AbstractAuthenticationService, useClass: AuthenticationService }
  ]
})
export class AuthenticationModule { }
