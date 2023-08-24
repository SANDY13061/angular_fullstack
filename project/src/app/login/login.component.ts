import { Component ,Injectable,OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpserviceService} from "../httpservice.service"



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  check:any;
  


  constructor(
    private router: Router,
    private fb:FormBuilder,
    private http:HttpserviceService
   ){}
  ngOnInit(): void {
    
  }
   
  

  async onSubmit(){
   
    let param={
      email:this.editEmail,
      password:this.editpassward
    };
    console.log(param)
    
    
    if(this.check==true){
    
      let result=await this.http.login(param);
      let logindata=await this.http.LoginUserData();
      let Findsuperuser=await logindata.rows[0].superuser
      console.log(result)
      if(result.success){
        if( Findsuperuser==true){
          this.router.navigate(['superuser'])
          console.log("superuser")
        }
        else{
          this.router.navigate(['mainpage'])
          console.log("mainpage")

        }
        
       
       
      }
      else{
        alert(result.message)
      }
    }
    else{
      alert("please accept the terms and condition")
    }



 

  
}
editEmail:any;
editpassward:any;





  register(){
    this.router.navigate(['Register']);
  }
  main(){
    this.router.navigate(['mainpage'])
  }

  superuser(){
    let param={
      email:this.editEmail,
      password:this.editpassward
    };
    console.log(this.editEmail)
    return param
  }
  onCheck(event:any,check:any){
   console.log(event.checked)
   this.check=event.checked
   return this.check

  }

   
 
 
 

 
 
  



}

