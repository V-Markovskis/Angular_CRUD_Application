import { Routes } from '@angular/router';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

export const routes: Routes = [
  { path: '', component: BookPageComponent },
  { path: 'about', component: AboutPageComponent },
];
