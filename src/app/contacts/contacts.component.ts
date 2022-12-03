import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  userDetails: any ;

  RegisterForm = new FormGroup ({
    name : new FormControl(''),
    email : new FormControl(''),
    sub : new FormControl(''),
    msg : new FormControl('')
  })
  


  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(){
    this.userDetails.push(this.RegisterForm.value);
    console.log(this.userDetails);
  }

}
