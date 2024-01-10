import {
  ChangeDetectorRef,
  Component,
  Input,
  SimpleChanges,
} from '@angular/core';
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
import { EditStateService } from '../../services/edit-state.service';
import { IBook } from '../../models/book';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, FocusDirective],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css',
})
export class CreateBookComponent {
  @Input() book: IBook | undefined;
  constructor(
    private bookService: BooksService,
    private modalService: ModalService,
    private editStateService: EditStateService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.book && changes.book.currentValue) {
      this.form.patchValue(changes.book.currentValue);
    } else {
      this.form.reset();
    }
  }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    image: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(10),
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
  get image() {
    return this.form.controls.image as FormControl;
  }
  get author() {
    return this.form.controls.author as FormControl;
  }
  get about() {
    return this.form.controls.about as FormControl;
  }

  updateCurrentBook(book: IBook) {
    if (this.book) {
      book.title = this.form.value.title as string;
      book.image = this.form.value.image as string;
      book.author = this.form.value.author as string;
      book.about = this.form.value.about as string;
    }
    return book;
  }

  submit() {
    if (this.editStateService.isEditing) {
      if (this.book) {
        this.bookService
          .update(this.book.id!, this.updateCurrentBook(this.book))
          .subscribe(() => {
            this.editStateService.setIsEditingFalse();
          });
      }
    } else {
      this.bookService
        .create({
          title: this.form.value.title as string,
          image: this.form.value.image as string,
          author: this.form.value.author as string,
          about: this.form.value.about as string,
        })
        .subscribe(() => {
          this.modalService.close();
        });
    }
  }
}
