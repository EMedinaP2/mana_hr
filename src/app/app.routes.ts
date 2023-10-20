import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddPositionComponent } from './components/add-position/add-position.component';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-position', component: AddPositionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];
