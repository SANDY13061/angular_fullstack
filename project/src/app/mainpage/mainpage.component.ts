import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpserviceService} from "../httpservice.service"
import{ HttpClient,HttpHeaders} from "@angular/common/http";



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit{
  userdata:any;
  constructor(
    private router: Router,
    private fb:FormBuilder,
    private http:HttpserviceService,
    

   
   ){}
   showFiller = false;
   async ngOnInit(){
    let result=await this.http.LoginUserData();
    if (result.success){
      console.log(result.rows[0].email)
      this.userdata=await result.rows[0].name
      
      
     
      
     



    }
   
    


}
}





