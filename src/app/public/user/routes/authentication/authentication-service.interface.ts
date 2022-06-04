import { Observable } from "rxjs";
import { ForgotPasswordDTO } from "./dtos/forgot-password.dto";
import { RefreshTokenDTO } from "./dtos/refresh-token.dto";
import { SignInDTO } from "./dtos/sign-in.dto";
import { SignOutDTO } from "./dtos/sign-out.dto";
import { SignUpDTO } from "./dtos/sign-up.dto";

export interface IAuthenticationService {
    signIn<T>(signInDTO: SignInDTO): Observable<T>;
    signUp<T>(signUpDTO: SignUpDTO): Observable<T>;
    signOut<T>(signOutDTO: SignOutDTO): Observable<T>;
    forgotPassword<T>(forgotPasswordDTO: ForgotPasswordDTO): Observable<T>;
    refreshToken<T>(refreshTokenDTO: RefreshTokenDTO): Observable<T>;
}