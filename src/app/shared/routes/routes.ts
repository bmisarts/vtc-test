import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: "auth",
    loadChildren: () => import("../../auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "dashbord",
    loadChildren: () => import("../../dashbord/dashbord.module").then((m) => m.DashbordModule),
  },
];
