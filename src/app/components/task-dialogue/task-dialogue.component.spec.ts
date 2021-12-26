import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDialogueComponent } from './task-dialogue.component';

describe('TaskDialogueComponent', () => {
  let component: TaskDialogueComponent;
  let fixture: ComponentFixture<TaskDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
