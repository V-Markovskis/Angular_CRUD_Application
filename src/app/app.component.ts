import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { ModalComponent } from './components/modal/modal.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BookComponent,
    HttpClientModule,
    GlobalErrorComponent,
    ModalComponent,
    CreateBookComponent,
    NavigationComponent,
    BookDetailsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
