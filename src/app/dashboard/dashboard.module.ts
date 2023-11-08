import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavRightComponent } from './layout/nav/nav-right/nav-right.component';
import { SearchComponent } from './layout/nav/search/search.component';
import { HomeComponent } from './home/home.component';
import { RequisitionsComponent } from './home/requisitions/requisitions.component';
import { RecoveryComponent } from './home/recovery/recovery.component';
import { RecognisationComponent } from './home/recognisation/recognisation.component';
import { NewUpdateComponent } from './home/new-update/new-update.component';
import { GeolocationComponent } from './home/geolocation/geolocation.component';
import { StatDatasComponent } from './home/stat-datas/stat-datas.component';
import { NotifyComponent } from './home/notify/notify.component';



@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    NavRightComponent,
    SearchComponent,
    HomeComponent,
    RequisitionsComponent,
    RecoveryComponent,
    RecognisationComponent,
    NewUpdateComponent,
    GeolocationComponent,
    StatDatasComponent,
    NotifyComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
  ]
})
export class DashboardModule { }
