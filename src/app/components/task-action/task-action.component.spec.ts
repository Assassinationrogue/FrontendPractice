import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskactionComponent } from './task-action.component';

describe('ListComponent', () => {
  let component: TaskactionComponent;
  let fixture: ComponentFixture<TaskactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskactionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
