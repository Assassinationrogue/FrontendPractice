import { addTask } from 'src/app/model/task';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { take, tap, map } from 'rxjs/operators';

@Component({
  selector: 'view-edit-task-popup',
  templateUrl: './view-edit-task-popup.component.html',
  styleUrls: ['./view-edit-task-popup.component.scss'],
})
export class ViewEditTaskPopupComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  private popupState: boolean;
  @Output() closed = new EventEmitter<boolean>();
  @Output() editedValue = new EventEmitter<addTask>();
  @Input() set hasCalled(value: Observable<boolean>) {
    if (value) {
      this.subscription.add(
        value.subscribe((state) => this.togglePopup(state))
      );
    }
  }

  taskList: addTask[] = [];
  private _task: addTask;
  get task(): addTask {
    return this._task;
  }
  @Input() set task(value: addTask) {
    this._task = value;
    if (value) {
      this.taskList.push(value);
      this.closePopupOnEscape();
    }
  }
  @Input() taskIndex: number;
  constructor() {}

  ngOnInit(): void {}


  /**
   * Closes popup when escape button is pressed
   * @param none
   * @returns void
   */
  private closePopupOnEscape(): void {
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.popupState) {
        this.togglePopup(false);
      }
    });
  }

  /**
   * Toggles the popup, set popupState true if popup is open else false
   * @param state boolean
   * @returns void
   */
  togglePopup(state: boolean): void {
    if (!state) {
      this.closed.emit(state);
      this.popupState = state;
      document.getElementById('popup-1').classList.remove('active');
    } else {
      document.getElementById('popup-1').classList.add('active');
      this.popupState = state;
    }
  }

  /**
   * Gets current popup value
   * @param none
   * @returns void
   */
  getPopupValue(): void {
    this.editedValue.emit({
      index: this.taskIndex,
      title: document.querySelector('.content__sub-header--title').innerHTML,
      note: document.querySelector('.content__sub-header--note').innerHTML,
    });
    this.togglePopup(false);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
