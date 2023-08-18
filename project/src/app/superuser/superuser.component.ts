import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {HttpserviceService} from "../httpservice.service"
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-superuser',
  templateUrl: './superuser.component.html',
  styleUrls: ['./superuser.component.css']
})
export class SuperuserComponent implements OnInit {
  usercoll=new MatTableDataSource([])
  userDispCol=["id","name","email","create_on","edit","delete"]

  constructor(
    private router:Router,
    private http:HttpserviceService
  ){}
  ngOnInit(): void {
    this.getNonAdminUserList()
    
  }
  async getNonAdminUserList(){
    let result=await this.http.getNonAdminUserList();
    if (result.success){
      result.rows.map((row:any) =>{
        row["editMode"]=false;
        row["editEmail"]= new FormControl(row.email);
        row["editName"] = new FormControl(row.name)

      })
      this.usercoll=new MatTableDataSource(result.rows);
      console.log(result.rows);
      console.log(this.usercoll)
    }
    else{
      this.usercoll= new MatTableDataSource([])
      console.log(result);
    }
  }
  async deleteUser(ele:any){
    let conf=confirm(`Are you sure you want to delete user ${ele.name}?`)
    let param={id:ele.id}
    let result=await this.http.deleteUser(param);
    if (result.success){
      this.getNonAdminUserList();
    }
    else{
      console.log("could not delete the user");
    }
  }
  async editUser(ele:any){
    let param={id:ele.id,email:ele.editEmail.value ,name:ele.editName.value}
    let result=await this.http.editUser(param);
    if (result.success){
      ele.email=ele.editEmail.value;
      ele.Name=ele.editName.value;
      this.getNonAdminUserList();
    }
    else{
      console.log(result.message);
    }
  }
  



}
//editUser
