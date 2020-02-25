export class   UserInfo{
   
        firstName:string;
       lastName: string;
        jobTitle: string;
        avatar:string;
        phoneNumber:string;
        constructor(  firstName:string,lastName: string,jobTitle: string,avatar:string, phoneNumber:string){
            this.avatar=avatar;
            this.firstName=firstName;
            this.jobTitle=jobTitle;
            this.lastName=lastName;
            this.phoneNumber=phoneNumber;
        }
}