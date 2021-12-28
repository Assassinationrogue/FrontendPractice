import { FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  /**
   * Sets field name
   * @param field any
   * @param fieldName string
   * @returns string
   */
  setLabelName(field: any, fieldName: string): string {
    return field[fieldName]['label'];
  }

  isRequired(fg: FormGroup, fieldName: string): boolean {
    return fg.get(fieldName).hasValidator(Validators.required);
  }

  isInvalid(fg: FormGroup, fieldName: string): boolean {
    return (
      (fg.get(fieldName).dirty || fg.get(fieldName).touched) &&
      fg.get(fieldName).hasError('required')
    );
  }
}
