import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TDFormComponent } from './tdform/tdform.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, TDFormComponent, ReactiveFormComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
