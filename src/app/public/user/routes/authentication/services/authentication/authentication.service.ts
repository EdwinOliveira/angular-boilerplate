import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { AbstractAuthenticationService } from '../../authentication-service.abstract';
import { ForgotPasswordDTO } from '../../dtos/forgot-password.dto';
import { RefreshTokenDTO } from '../../dtos/refresh-token.dto';
import { SignInDTO } from '../../dtos/sign-in.dto';
import { SignOutDTO } from '../../dtos/sign-out.dto';
import { SignUpDTO } from '../../dtos/sign-up.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends AbstractAuthenticationService {
  public constructor(
    private readonly _httpService: HttpService
  ) {
    super();
  }

  public signIn<T>(signInDTO: SignInDTO): Observable<T> {
    return new Observable((observer: Observer<T>) => { });
  }

  public signUp<T>(signUpDTO: SignUpDTO): Observable<T> {
    return new Observable((observer: Observer<T>) => { });
  }

  public signOut<T>(signOutDTO: SignOutDTO): Observable<T> {
    return new Observable((observer: Observer<T>) => { });
  }

  public forgotPassword<T>(forgotPasswordDTO: ForgotPasswordDTO): Observable<T> {
    return new Observable((observer: Observer<T>) => { });
  }

  public refreshToken<T>(refreshTokenDTO: RefreshTokenDTO): Observable<T> {
    return new Observable((observer: Observer<T>) => { });
  }
}