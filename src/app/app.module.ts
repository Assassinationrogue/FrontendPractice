import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './components/add/add.component';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';

const primeng = [
  ButtonModule,
  CheckboxModule,
  CardModule,
  ConfirmDialogModule,
  TooltipModule,
  ToastModule,
];
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    FormComponent,
    ListComponent,
    AddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ...primeng],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
