import { addTask } from '../../model/task';
import { TaskDialogueComponent } from '../task-dialogue/task-dialogue.component';
import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'task-action',
  templateUrl: './task-action.component.html',
  styleUrls: ['./task-action.component.scss'],
  providers: [DialogService, MessageService],
})
export class TaskactionComponent implements OnInit, OnDestroy {
  private counter: number = 1;
  viewTask: boolean;
  constructor(
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}
  listOfTask = [{ title: 'Exercise', note: 'Do exercise for 1hr.' }];
  private ref: DynamicDialogRef;

  ngOnInit(): void {}

  /**
   * Adds new task on clicking add button
   * @param none
   * @returns void
   */
  addNewTask(): void {
    this.openAddTaskDialog(this.setSubscriptsOrdinals(this.counter));
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

  /**
   * opens add task dialog box
   * @param subscriptedNumber string
   */
  openAddTaskDialog(subscriptedNumber: string): void {
    this.ref = this.dialogService.open(TaskDialogueComponent, {
      header: 'Add task',
      width: '23.827em',
      baseZIndex: 100000,
    });

    this.ref.onClose.subscribe((task: addTask) => {
      if (task) {
        if (task.title && task.note) {
          this.listOfTask.push(task);
          this.messageService.add({
            severity: 'info',
            summary: `${subscriptedNumber} task added.`,
          });
          this.counter++;
        } else {
          this.messageService.add({
            severity: 'error',
            summary: `Blank task!`,
          });
        }
      }
    });
  }

  /**
   * Opens view edit popup
   * @param task addTask
   * @returns void
   */
  openTaskDialog(task: addTask): void {
    this.viewTask = !undefined;
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.ref.onClose;
  }
}

// !(task.title === '' && task.note === '') ||
