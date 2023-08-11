import { Component ,OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(
    private router: Router,
    private fb:FormBuilder,
   ){}


  register(){
    this.router.navigate(['Register']);
  }
  main(){
    this.router.navigate(['mainpage'])
  }

}
