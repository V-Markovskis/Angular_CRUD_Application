import { Component, Input } from '@angular/core';
import { IBook } from '../../models/book';
import { NgOptimizedImage } from '@angular/common';
import { BooksService } from '../../services/books.service';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  @Input() book: IBook;

  constructor(
    public bookService: BooksService,
    private toastr: ToastrService
  ) {}

  removeBook(book: IBook) {
    this.bookService.remove(book.id!).subscribe(() => {
      this.toastr.success('Book record deleted');
    });
  }
}
