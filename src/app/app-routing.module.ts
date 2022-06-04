import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicRouteCollection } from './shared/constants/collections/public.route.collection';

const routes: Routes = [
  {
    path: PublicRouteCollection.PUBLIC,
    loadChildren: () => import("./public/public.module").then((m) => m.PublicModule),
  },
  {
    path: "**",
    redirectTo: "/public/users/authentication/sign-in",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
