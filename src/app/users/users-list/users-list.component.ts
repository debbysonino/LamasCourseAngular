import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/models/User.Model';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input()
  usersList: UserModel[];
  @Input()
  currentSelected:UserModel;

  @Output()
  selectedUser: EventEmitter<UserModel>;
  
  constructor() {
    this.selectedUser = new EventEmitter<UserModel>();
  }


  ngOnInit(): void {
  }
  onSelectUser(user: UserModel) {
       this.selectedUser.emit(user);
  }
}
