import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: "auth",
    loadChildren: () => import("../../auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "dashboard",
    loadChildren: () => import("../../dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
];
