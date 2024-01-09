import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditStateService {
  public isEditing = false;

  setIsEditingTrue() {
    this.isEditing = true;
  }

  setIsEditingFalse() {
    this.isEditing = false;
  }

  constructor() {}
}
