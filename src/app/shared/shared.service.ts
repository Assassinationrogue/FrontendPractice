import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  setLabelName(field: any, fieldName: string): string {
    return field[fieldName]['label'];
  }
}
