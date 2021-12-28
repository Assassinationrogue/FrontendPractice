import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditTaskPopupComponent } from './view-edit-task-popup.component';

describe('ViewEditTaskPopupComponent', () => {
  let component: ViewEditTaskPopupComponent;
  let fixture: ComponentFixture<ViewEditTaskPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditTaskPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditTaskPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
