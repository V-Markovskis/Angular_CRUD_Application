import { ChangeDetectorRef, Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ModalService } from '../../services/modal.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css',
})
export class AboutPageComponent {
  title = 'my-app';
  loading = false;

  constructor(
    public bookService: BooksService,
    private changeDetectorRef: ChangeDetectorRef,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.bookService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
