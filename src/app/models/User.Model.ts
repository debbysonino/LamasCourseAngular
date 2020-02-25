import { UserInfo } from './UserInfo.Models';

export class UserModel{
    id:number;
    username:string;
    email: string;
    info:UserInfo;
    constructor(id:number,username:string,email:string,info:UserInfo){
        this.id=id;
        this.email=email;
        this.username=username;
        this.info=info;
    }
}