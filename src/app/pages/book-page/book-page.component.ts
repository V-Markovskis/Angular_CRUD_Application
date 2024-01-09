import { Component } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { BookComponent } from '../../components/book/book.component';
import { CreateBookComponent } from '../../components/create-book/create-book.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { BooksService } from '../../services/books.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-book-page',
  standalone: true,
  imports: [
    AsyncPipe,
    BookComponent,
    CreateBookComponent,
    ModalComponent,
    NgForOf,
    NgIf,
  ],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css',
})
export class BookPageComponent {
  title = 'my-app';
  loading = false;

  constructor(
    public bookService: BooksService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.bookService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
