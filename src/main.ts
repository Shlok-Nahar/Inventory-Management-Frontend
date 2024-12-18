import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { ProductsComponent } from './app/products/products.component';
import { routes } from './app/app.routes';

bootstrapApplication(ProductsComponent, {
  providers: [
    provideRouter(routes), 
  ]
})
  .catch((err) => console.error(err));
