import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, Observable, retry, tap, throwError } from 'rxjs';
import { IBook } from '../models/book';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {}

  books: IBook[] = [];

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:3000/books').pipe(
      retry(2),
      tap(books => (this.books = books)),
      catchError(this.errorHandler.bind(this))
    );
  }

  create(book: IBook): Observable<IBook> {
    return this.http.post<IBook>('http://localhost:3000/books', book).pipe(
      tap(book => {
        this.books.push(book);
      })
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
