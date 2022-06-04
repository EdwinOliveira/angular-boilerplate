import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractAuthenticationService } from '../../authentication-service.abstract';
import { ForgotPasswordDTO } from '../../dtos/forgot-password.dto';
import { RefreshTokenDTO } from '../../dtos/refresh-token.dto';
import { SignInDTO } from '../../dtos/sign-in.dto';
import { SignOutDTO } from '../../dtos/sign-out.dto';
import { SignUpDTO } from '../../dtos/sign-up.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationStubService extends AbstractAuthenticationService {
  public constructor() {
    super();
  }

  public signIn<T>(signInDTO: SignInDTO): Observable<T> {
    throw new Error('Method not implemented.');
  }

  public signUp<T>(signUpDTO: SignUpDTO): Observable<T> {
    throw new Error('Method not implemented.');
  }

  public signOut<T>(signOutDTO: SignOutDTO): Observable<T> {
    throw new Error('Method not implemented.');
  }

  public forgotPassword<T>(forgotPasswordDTO: ForgotPasswordDTO): Observable<T> {
    throw new Error('Method not implemented.');
  }

  public refreshToken<T>(refreshTokenDTO: RefreshTokenDTO): Observable<T> {
    throw new Error('Method not implemented.');
  }
}
