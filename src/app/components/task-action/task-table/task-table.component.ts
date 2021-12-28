import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {
  @Input() taskList: string[];
  constructor() { }

  ngOnInit(): void {
   
  }

}
