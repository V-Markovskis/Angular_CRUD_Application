import { Component, Input } from '@angular/core';
import { IBook } from '../../models/book';
import { NgOptimizedImage } from '@angular/common';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  @Input() book: IBook;

  constructor(public bookService: BooksService) {}

  removeBook(book: IBook) {
    this.bookService.remove(book.id!).subscribe();
  }
}
