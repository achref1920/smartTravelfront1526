import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { authGuard } from './guards/auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const routes: Routes = [
  { path: '', redirectTo: 'log', pathMatch: 'full' },
  {
    path: 'log',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'external-search', pathMatch: 'full' },
      { path: 'external-search', loadComponent: () => import('./features/external-search/external-search.component').then(m => m.ExternalSearchComponent) },
    ]
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
];


