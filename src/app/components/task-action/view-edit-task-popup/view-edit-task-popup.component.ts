import { addTask } from 'src/app/model/task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'view-edit-task-popup',
  templateUrl: './view-edit-task-popup.component.html',
  styleUrls: ['./view-edit-task-popup.component.scss'],
})
export class ViewEditTaskPopupComponent implements OnInit {
  @Output() closed = new EventEmitter<boolean>();
  @Input() set hasCalled(value: boolean) {

    if (value) {
      this.togglePopup(value);
    }
  }
  @Input() task: addTask;
  constructor() {}

  ngOnInit(): void {}

  togglePopup(toggle: boolean): void {
    
      document.getElementById('popup-1').classList.toggle('active');
    if(!toggle){
      this.closed.emit(toggle);
    }
  }
}
