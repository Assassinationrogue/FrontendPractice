import { addTask } from 'src/app/model/task';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'view-edit-task-popup',
  templateUrl: './view-edit-task-popup.component.html',
  styleUrls: ['./view-edit-task-popup.component.scss'],
})
export class ViewEditTaskPopupComponent implements OnInit {
  @Input() set hasCalled(value: boolean) {
    if (value) {
      this.togglePopup();
    }
  }
  @Input() task: addTask;
  constructor() {}

  ngOnInit(): void {}

  togglePopup(): void {
    document.getElementById('popup-1').classList.toggle('active');
  }
}
