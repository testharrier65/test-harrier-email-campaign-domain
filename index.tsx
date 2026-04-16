import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './src/app.component';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { AppRoutes } from './src/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(AppRoutes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
  ],
}).catch(err => console.error(err));
