import { Component, OnInit } from '@angular/core';
import { IUsersListItem } from './model/users.modeles';
import { UsersService } from './users.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userslistiteam: IUsersListItem[] | undefined;
  isSpecial: any;
  isUnchanged: any;
  canSave: any;



  constructor(private service: UsersService) {}

  ngOnInit(): void {

    this.service.getsearchusersiteam().subscribe((Result) => {
      this.userslistiteam = Result;
      console.log(Result);
    });
  }

  // street(streetname:string): void  {
  
  //   this.service.getsearchusersiteam().subscribe((Result) => {
  //     this.userslistiteam = Result;
  //     console.log(Result);
  //   });
  
  
  // }  

}




