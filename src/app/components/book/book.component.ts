import { Component, Input } from '@angular/core';
import { IBook } from '../../models/book';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  @Input() book: IBook;
}
