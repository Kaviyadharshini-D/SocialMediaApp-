import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupuser:any[]=[];
  signupObj: any={
    first_name:'',
    last_name:'',
    User_name:'',
    password:'',
    mobile_number=''

  };
  loginObj:any={
    User_name:'',
    password:''

  }
}
