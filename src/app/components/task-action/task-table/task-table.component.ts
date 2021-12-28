import { Component, Input, OnInit } from '@angular/core';
import { addTask } from 'src/app/model/task';

@Component({
  selector: 'task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {
  @Input() task: addTask;
  constructor() { }

  ngOnInit(): void {
   
  }

}
