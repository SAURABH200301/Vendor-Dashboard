import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BadgeComponent } from './components/Badge/badge.component';
import { CardComponent } from './components/Card/card.component';
import { BarChartComponent } from './components/Charts/barChart/bar-chart.component';
import { HalfDonutChartComponent } from './components/Charts/HalfDonut/half-donut.component';
import { ModalComponent } from './components/Modal/modal.component';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { ProgressBarComponent } from './components/ProgressBar/progress-bar.component';
import { TeamMembersListComponent } from './components/TeamMembersList/team-members-list.component';
import { UserGreetComponent } from './components/UserGreet/user-greet.component';
import { VendorBreakdownComponent } from './components/VendorBreakdown/vendor-breakdown.component';
import { VendorMonitorComponent } from './components/VendorMonitor/vendor-monitor.component';
import { AppApiService } from './services/app-api.service';
import { VendorService } from './services/vendor.service';
import { HighchartsChartModule } from 'highcharts-angular';
import { DialogModule } from 'primeng/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { LoaderComponent } from './components/Loader/loader.component';
import { HomeComponent } from './components/Home/home.component';
import { ImageModule } from 'primeng/image';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { LoginComponent } from './components/Login/login.component';
import { AuthGuard } from './Guard/auth.guard';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    NavbarComponent,
    CardComponent,
    UserGreetComponent,
    VendorBreakdownComponent,
    VendorMonitorComponent,
    HalfDonutChartComponent,
    TeamMembersListComponent,
    BadgeComponent,
    ProgressBarComponent,
    ModalComponent,
    LoaderComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighchartsChartModule,
    DialogModule,
    CommonModule,
    BrowserAnimationsModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    DataViewModule,
    AvatarModule,
    AvatarGroupModule,
    ImageModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ButtonModule
  ],
  providers: [
    VendorService,
    AppApiService,
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: 'tailwind-light',
      },
    }),
    AuthGuard,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
})
export class AppModule {}
