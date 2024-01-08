import { Component, Input } from '@angular/core';
import { IBook } from '../../models/book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  @Input() book: IBook;
}
