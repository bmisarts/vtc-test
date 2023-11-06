import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { content } from './shared/routes/routes';

const routes: Routes = [
  {
    path: 'splash',
    component: SplashComponent,
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    children: content
  },
  {
    path: '**',
    component: AppComponent
  },
];

@NgModule({
  imports: [[RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    })],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
