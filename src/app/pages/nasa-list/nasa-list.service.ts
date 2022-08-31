import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NasaListService {

  constructor(private http:HttpClient) {}

  public getsearchnasalist(): Observable<any> {
    return this.http.get<any>('https://api.nasa.gov/planetary/apod?api_key=lhldgeCRrECSuZsddEKB5MycAipMhInOdn7DoEmX' );
  }





}
