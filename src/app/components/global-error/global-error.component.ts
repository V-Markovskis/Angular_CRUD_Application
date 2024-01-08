import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../../services/error.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-global-error',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './global-error.component.html',
  styleUrl: './global-error.component.css',
})
export class GlobalErrorComponent implements OnInit {
  constructor(public errorService: ErrorService) {}

  ngOnInit(): void {}
}
