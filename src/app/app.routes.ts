import { Routes } from '@angular/router';
import { HomeComponent } from './components/Home/home.component';
import { LoginComponent } from './components/Login/login.component';
import { AuthGuard } from './Guard/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
];
