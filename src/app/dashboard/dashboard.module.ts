import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavRightComponent } from './layout/nav/nav-right/nav-right.component';
import { SearchComponent } from './layout/nav/search/search.component';



@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    NavRightComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
