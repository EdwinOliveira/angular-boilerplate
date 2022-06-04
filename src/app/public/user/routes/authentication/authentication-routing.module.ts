import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RefreshTokenComponent } from './components/refresh-token/refresh-token.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthenticationRouteCollection } from './constants/authentication.route.collection';

const routes: Routes = [
    {
        path: AuthenticationRouteCollection.SIGN_IN,
        component: SignInComponent
    },
    {
        path: AuthenticationRouteCollection.SIGN_UP,
        component: SignUpComponent
    },
    {
        path: AuthenticationRouteCollection.SIGN_OUT,
        component: SignOutComponent
    },
    {
        path: AuthenticationRouteCollection.FORGOT_PASSWORD,
        component: ForgotPasswordComponent
    },
    {
        path: AuthenticationRouteCollection.REFRESH_TOKEN,
        component: RefreshTokenComponent
    },
    {
        path: "",
        redirectTo: "/public/users/authentication/sign-in",
        pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
