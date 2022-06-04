import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRouteCollection } from '../shared/constants/collections/public.route.collection';

const routes: Routes = [
    {
        path: PublicRouteCollection.USERS,
        loadChildren: () => import("./public.module").then((m) => m.PublicModule),
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
export class PublicRoutingModule { }
