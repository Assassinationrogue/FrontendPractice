import { addTask } from 'src/app/model/task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'view-edit-task-popup',
  templateUrl: './view-edit-task-popup.component.html',
  styleUrls: ['./view-edit-task-popup.component.scss'],
})
export class ViewEditTaskPopupComponent implements OnInit {
  @Output() closed = new EventEmitter<boolean>();
  @Output() editedValue = new EventEmitter<addTask>();
  @Input() set hasCalled(value: boolean) {
    if (value) {
      this.togglePopup(value);
    }
  }
  @Input() task: addTask;
  @Input() taskIndex: number;
  constructor() {}

  ngOnInit(): void {}

  /**
   * Toggles the popup
   * @param state boolean
   * @returns void
   */
  togglePopup(state: boolean): void {
    document.getElementById('popup-1').classList.toggle('active');
    if (!state) {
      this.closed.emit(state);
    }
  }

  getPopupValue() {
    this.editedValue.emit({
      index: this.taskIndex,
      title: document.querySelector('.content__sub-header--title').innerHTML,
      note: document.querySelector('.content__sub-header--note').innerHTML,
    });
    this.togglePopup(false);
  }
}
