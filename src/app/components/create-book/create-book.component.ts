import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { FocusDirective } from '../../directives/focus.directive';
import { BooksService } from '../../services/books.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, FocusDirective],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css',
})
export class CreateBookComponent {
  constructor(
    private bookService: BooksService,
    private modalService: ModalService
  ) {}

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    author: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    about: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  get title() {
    return this.form.controls.title as FormControl;
  }
  get author() {
    return this.form.controls.author as FormControl;
  }
  get about() {
    return this.form.controls.about as FormControl;
  }

  submit() {
    this.bookService
      .create({
        title: this.form.value.title as string,
        author: this.form.value.author as string,
        about: this.form.value.about as string,
      })
      .subscribe(() => {
        this.modalService.close();
      });
  }
}
