import { Observable } from "rxjs";
import { IAuthenticationService } from "./authentication-service.interface";
import { ForgotPasswordDTO } from "./dtos/forgot-password.dto";
import { RefreshTokenDTO } from "./dtos/refresh-token.dto";
import { SignInDTO } from "./dtos/sign-in.dto";
import { SignOutDTO } from "./dtos/sign-out.dto";
import { SignUpDTO } from "./dtos/sign-up.dto";

export abstract class AbstractAuthenticationService implements IAuthenticationService {
    public abstract signIn<T>(signInDTO: SignInDTO): Observable<T>;
    public abstract signUp<T>(signUpDTO: SignUpDTO): Observable<T>;
    public abstract signOut<T>(signOutDTO: SignOutDTO): Observable<T>;
    public abstract forgotPassword<T>(forgotPasswordDTO: ForgotPasswordDTO): Observable<T>;
    public abstract refreshToken<T>(refreshTokenDTO: RefreshTokenDTO): Observable<T>;

}