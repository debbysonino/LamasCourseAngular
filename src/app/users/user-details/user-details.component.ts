import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserInfo } from 'src/app/models/UserInfo.Models';
import { UserModel } from 'src/app/models/User.Model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  currentUser:UserModel;

  @Output()
  changeAvatar: EventEmitter<any>;
  constructor() { 
    this.changeAvatar=new EventEmitter<any>();
  }

  ngOnInit(): void {
  }
  saveAvatar(avatar:string){

    this.changeAvatar.emit(avatar);

  }
  saveUserDetails(id:number,username:string,email:string,firstName:string,lastName: string,jobTitle: string,avatar:string, phoneNumber:string){
    // let userNew= new UserModel(id,username,email,new UserInfo(firstName,lastName,jobTitle,avatar,phoneNumber));
    this.currentUser.email=email;
    this.currentUser.username=username;
    this.currentUser.info.firstName=firstName;
    this.currentUser.info.avatar=avatar;
    this.currentUser.info.lastName=lastName;
    this.currentUser.info.phoneNumber=phoneNumber;
  }

}
