import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IBook } from '../../models/book';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { CreateBookComponent } from '../create-book/create-book.component';
import { EditStateService } from '../../services/edit-state.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [NgIf, NgOptimizedImage, CreateBookComponent],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css',
})
export class BookDetailsComponent implements OnInit {
  book: IBook | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService,
    public editStateService: EditStateService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.bookService.getAll().subscribe(() => {
      const routeParams = this.route.snapshot.paramMap;
      const bookIdFromRoute = Number(routeParams.get('booksId'));
      this.book = this.bookService.books.find(
        book => book.id === bookIdFromRoute
      );
    });
  }

  ngDoCheck(): void {
    this.ref.detectChanges();
  }
}
