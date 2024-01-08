import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isDisabled = false;
  isVisible$ = new BehaviorSubject<boolean>(true);

  open() {
    this.isVisible$.next(true);
    this.isDisabled = true;
  }
  close() {
    this.isVisible$.next(false);
    this.isDisabled = false;
  }
  constructor() {}
}
