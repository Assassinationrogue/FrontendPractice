import { SharedService } from './../../shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sb-task-dialogue',
  templateUrl: './task-dialogue.component.html',
  styleUrls: ['./task-dialogue.component.scss'],
})
export class TaskDialogueComponent implements OnInit {
  taskDialogueForm: FormGroup;

  fields = {
    title: {
      identity: 'title',
      label: 'Title',
      notEditable: '0',
      mandetory: '1',
    },
    note: {
      identity: 'note',
      label: 'Note',
      notEditable: '0',
      mandetory: '1',
    },
  };

  constructor(private fb: FormBuilder, public formAttributes: SharedService) {}

  ngOnInit(): void {
    this.taskDialogueForm = this.defineForm();
    console.log(this.taskDialogueForm);
  }

  /**
   * Defines a new blank form
   * @param none
   * @returns FormGroup
   */
  private defineForm(): FormGroup {
    let formControls = {};
    Object.keys(this.fields).forEach((key) => {
      formControls[key] = [
        {
          value: null,
          disabled: Boolean(parseInt(this.fields[key]?.notEditable)),
        },
        parseInt(this.fields[key]['mandetory'])
          ? Validators.required
          : Validators.nullValidator,
      ];
    });
    return this.fb.group(formControls);
  }

  /**
   * Displays label name
   * @param fieldName string
   * @returns string
   */
  displayFormLabel(fieldName: string): string {
    return this.formAttributes.setLabelName(this.fields, fieldName);
  }

  /**
   * Checks if field is required
   * @param fieldName string
   * @returns boolean
   */
  isRequired(fieldName: string):boolean{
    return this.formAttributes.isRequired(this.taskDialogueForm,fieldName);
  }

  /**
   * Checks if field is invalid
   * @param fieldName string
   * @returns booleam
   */
  checkForInvalidity(fieldName:string):boolean{
    return this.formAttributes.isInvalid(this.taskDialogueForm,fieldName)
  }
}
