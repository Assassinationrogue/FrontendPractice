import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'view-edit-task-popup',
  templateUrl: './view-edit-task-popup.component.html',
  styleUrls: ['./view-edit-task-popup.component.scss']
})
export class ViewEditTaskPopupComponent implements OnInit {
  @Input() hasCalled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
