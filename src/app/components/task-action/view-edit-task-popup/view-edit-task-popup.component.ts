import { addTask } from 'src/app/model/task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { take, tap, map } from 'rxjs/operators';

@Component({
  selector: 'view-edit-task-popup',
  templateUrl: './view-edit-task-popup.component.html',
  styleUrls: ['./view-edit-task-popup.component.scss'],
})
export class ViewEditTaskPopupComponent implements OnInit {
  @Output() closed = new EventEmitter<boolean>();
  @Output() editedValue = new EventEmitter<addTask>();
  @Input() set hasCalled(value: Observable<boolean>) {
    if (value) {
      value
        .pipe(
          take(1),
          map((data) => {
            if (data) {
              return true;
            } else {
              return false;
            }
          })
        )
        .subscribe((state) => this.togglePopup(state));
    }
  }
  @Input() task: addTask;
  @Input() taskIndex: number;
  constructor() {}

  ngOnInit(): void {
    // this.hasCalled.subscribe((data) => this.togglePopup(data));
  }

  /**
   * Toggles the popup
   * @param state boolean
   * @returns void
   */
  togglePopup(state: boolean): void {
    if (!state) {
      this.closed.emit(state);
      document.getElementById('popup-1').classList.remove('active');
    } else {
      document.getElementById('popup-1').classList.add('active');
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
