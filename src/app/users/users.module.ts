import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    UserAdminComponent,
    UsersListComponent,
    UserDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UserAdminComponent
  ]
})
export class UsersModule { }
