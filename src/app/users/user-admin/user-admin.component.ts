import { Component, OnInit, getDebugNode } from '@angular/core';
import { UserModel } from 'src/app/models/User.Model';
import { UserInfo } from 'src/app/models/UserInfo.Models';
import {USERS} from 'src/app/mocks/users.mock';


@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  // currentUser:UserModel;
  selectedUser:UserModel;
  users:UserModel[];
  constructor() { }

  ngOnInit(): void {
    this.users=USERS;
    //  this.currentUser=new UserModel(311,"debbys","debby@getDebugNodxzxe.com",new UserInfo("Debby","Sonino","Manager","kuku","0506235536"));
/*     for(let i=0;i++;i<10){
      this.users.push(new UserModels(i,"kuku"+i,"djskd",new UserInfo("Ionatan","Sonino","Melech","kuku","0505903940")));
    } */
  }
  onUserSelected(user:UserModel){
    this.selectedUser=user;
  }
//   saveUserDetails(username:string,email:string){
//     this.currentUser.username=username;
//     this.currentUser.email=email;
// }
}
