import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './components/form/form.component';
import { TaskactionComponent } from './components/task-action/task-action.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './components/add/add.component';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TaskDialogueComponent } from './components/task-dialogue/task-dialogue.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskTableComponent } from './components/task-action/task-table/task-table.component';
import { ViewEditTaskPopupComponent } from './components/task-action/view-edit-task-popup/view-edit-task-popup.component';

const primeng = [
  ButtonModule,
  CheckboxModule,
  CardModule,
  ConfirmDialogModule,
  TooltipModule,
  ToastModule,
  InputTextModule,
  DynamicDialogModule,
  InputTextareaModule
];
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    FormComponent,
    TaskactionComponent,
    AddComponent,
    TaskDialogueComponent,
    TaskTableComponent,
    ViewEditTaskPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...primeng,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
