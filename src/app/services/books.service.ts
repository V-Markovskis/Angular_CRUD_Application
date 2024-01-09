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
      }),
      catchError(this.errorHandler.bind(this))
    );
  }

  remove(id: string): Observable<void> {
    console.log('hello from delete');
    console.log('id', id);
    return this.http.delete<void>(`http://localhost:3000/books/${id}`).pipe(
      tap(() => {
        this.books = this.books.filter(book => book.id !== id);
      }),
      catchError(this.errorHandler.bind(this))
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
