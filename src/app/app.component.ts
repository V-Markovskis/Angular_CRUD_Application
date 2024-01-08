import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { IBook } from './models/book';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './services/books.service';
import { Observable, tap } from 'rxjs';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { ModalComponent } from './components/modal/modal.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { ModalService } from './services/modal.service';
import { NavigationComponent } from './components/navigation/navigation.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}

//return stream
// this.bookService.getAll().subscribe(book => {
//   this.book = book;
//   this.loading = false;
//   console.log(this.book);
// });
