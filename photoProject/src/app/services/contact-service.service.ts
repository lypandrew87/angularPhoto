import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';


@Injectable()
export class ContactService {

  constructor(private http: Http) {
   }

  sendEmail(testing:Object){

    
   //var connection = this.http.get("http://localhost:3000/email").subscribe(); 
  var  connetion2  = this.http.get("http://localhost:3000/api").subscribe(
    res => console.log(res)
  ); 
  debugger; 
   
  }
      
  }



