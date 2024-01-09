import { Routes } from '@angular/router';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

export const routes: Routes = [
  { path: '', component: BookPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'books/:booksId', component: BookDetailsComponent },
];
