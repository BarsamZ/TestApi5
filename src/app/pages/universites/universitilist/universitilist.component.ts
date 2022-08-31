import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { IUniversityListItem } from "../model/universites.models";

@Component({
  selector: 'app-universitilist',
  templateUrl: './universitilist.component.html',
  styleUrls: ['./universitilist.component.scss']
})
export class UniversitilistComponent implements OnInit {
  universitiListItems: IUniversityListItem[] | undefined;
  isSpecial: any;
  isUnchanged: any;
  canSave: any;

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service.getsearchuniversiti('Canada').subscribe((Result) => {
      this.universitiListItems = Result;
      console.log(Result);
    });
  }

  country(countryname:string): void  {
  
    this.service.getsearchuniversiti(countryname).subscribe((Result) => {
      this.universitiListItems = Result;
      console.log(Result);
    });
  
  
  }  

}

 