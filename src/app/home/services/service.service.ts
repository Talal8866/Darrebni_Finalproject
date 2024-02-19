import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders}   from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  // getCategreisBy(){
  //   return this.http.get("https://fakestoreapi.com/");
  // }
   

}



