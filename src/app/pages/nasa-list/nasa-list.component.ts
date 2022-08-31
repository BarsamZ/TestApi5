import { Component, OnInit } from '@angular/core';
import { INasaListIteam } from "./model/nasaList-model";
import { NasaListService } from "./nasa-list.service";

@Component({
  selector: 'app-nasa-list',
  templateUrl: './nasa-list.component.html',
  styleUrls: ['./nasa-list.component.scss']
})
export class NasaListComponent implements OnInit {

  nasalistiteams: INasaListIteam[] | undefined;
  isSpecial: any;
  isUnchanged: any;
  canSave: any;


  constructor(private service: NasaListService) {}

  ngOnInit(): void {

    this.service.getsearchnasalist().subscribe((Result) => {
      this.nasalistiteams = Result;
      console.log(Result);
    });


  }

}
