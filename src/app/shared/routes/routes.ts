import { Routes } from "@angular/router";
import { SplashComponent } from "src/app/splash/splash.component";
import { AuthGuard } from "../guard/auth.guard";

export const content: Routes = [
  {
    path: '',
    component: SplashComponent,
  },
  {
    path: "auth",
    loadChildren: () => import("../../auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "dashboard",
    loadChildren: () => import("../../dashboard/dashboard.module").then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
  },
];
