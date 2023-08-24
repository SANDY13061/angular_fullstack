import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpserviceService} from "../httpservice.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerErrorMsg:string|undefined

  form=this.fb.group({
    email: new FormControl(null,Validators.compose([
      Validators.required,
      Validators.email
    ])),
    name: new FormControl(null,Validators.compose([
      Validators.required,
    ])),
    password: new FormControl(null,Validators.compose([
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(5)
    ])) })

  constructor(
    private router: Router,
    private fb:FormBuilder,
    private http:HttpserviceService,
   ){}
  ngOnInit(): void {
    console.log("hello")
   
  }
  async register(){
    console.log("register",this.form.value);
    let param = {
      email : this.form.value.email,
      name : this.form.value.name,
      password : this.form.value.password

    }
    let result= await this.http.register(param);
     if(result.success){
      this.registerErrorMsg = undefined
      this.mainpage()
     }
     else{
      this.registerErrorMsg=result.message;
      // this.registerErrorMsg="email must not be null and unique";
      setTimeout(() => {
        this.registerErrorMsg=undefined;
        
      }, 5000);
     }
    }
    mainpage(){
      this.router.navigate(['']);
    }
  
     

  // matchingPassword(pass:string,conf:string){
  //   return(group: FormGroup)=> {
  //     if (group.controls[pass].value==group.controls[conf].value){
  //       return null;
  //     }
  //     else{
  //       return {'matching password': true};
  //     }
  //   }

  // }
   

}
