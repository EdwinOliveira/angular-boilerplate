import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRouteCollection } from "./constants/user.route.collection";

const routes: Routes = [
    {
        path: UserRouteCollection.AUTHENTICATION,
        loadChildren: () => import("./routes/authentication/authentication.module").then((m) => m.AuthenticationModule)
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
export class UserRoutingModule { }
