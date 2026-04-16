import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app/landing-page/landing-page.component').then(c => c.LandingPageComponent),
    title: 'TestHarrier - Modern Placement Testing Platform',
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
