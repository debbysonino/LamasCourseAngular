import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserAdminComponent } from './users/user-admin/user-admin.component';
import { FormsModule } from '@angular/forms';
import { HostListener, Component } from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
    UserAdminComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
