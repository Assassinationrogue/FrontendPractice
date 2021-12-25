import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'to-do-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  counter: number = 0;
  constructor() {}
  listOfTask = [];

  ngOnInit(): void {}

  /**
   * Adds new task on clicking add button
   * @param none
   * @returns void
   */
  addTask(): void {
    this.listOfTask.push(
      `${this.setSubscriptsOrdinals(this.counter)} new task added...`
    );
    this.counter++;
    console.log(this.listOfTask);
  }

  /**
   * Sets subscript ordinals
   * @param counter number
   * @param ordinals string has default value and do not use this parameter
   * @returns string
   */
  private setSubscriptsOrdinals(
    counter: number,
    ordinals: string = ''
  ): string {
    switch (counter) {
      case 1:
        ordinals = '1st';
        break;
      case 2:
        ordinals = '2nd';
        break;
      case 3:
        ordinals = '3rd';
        break;
      default:
        ordinals = `${counter}th`;
    }
    return ordinals;
  }
}
