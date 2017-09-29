import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ContactService} from '../../services/contact-service.service'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email:string; 
  name:string; 
  note:string; 
  submitContactObject: contactObject;
  constructor(private contentService: ContactService) { 
    
  }

  ngOnInit() {
    this.email = "testing@test.com"; 
    this.name = "Teddy";
    this.note = "Input Note Here";
  }

  sendEmail(){
  this.submitContactObject = {
    email: "",
    name: "",
    note: ""
  }
  this.submitContactObject.email = this.email; 
  this.submitContactObject.name = this.name; 
  this.submitContactObject.note = this.note;
  this.contentService.sendEmail(this.submitContactObject); 

  
  }



}

interface contactObject {  
  email: string;
  name: string;
  note : string;
}
