import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders} from "@angular/common/http";
import{ lastValueFrom,BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(
    private http:  HttpClient, 
  ) { }

  async register(data:any){
    return lastValueFrom(this.http.post<any>('http://localhost:4000/api/register',data));
  }
  async login(data:any){
    return lastValueFrom(this.http.post<any>('http://localhost:4000/api/login',data));
  }
  async getNonAdminUserList(){
    return lastValueFrom(this.http.get<any>('http://localhost:4000/api/getNonAdminUserList'));
  }
  async deleteUser(data:any){
    return lastValueFrom(this.http.post<any>('http://localhost:4000/api/deleteUser',data));
  }
  async editUser(data:any){
    return lastValueFrom(this.http.post<any>('http://localhost:4000/api/editUser',data));
  }
  async LoginUserData(){
    return lastValueFrom(this.http.get<any>('http://localhost:4000/api/LoginUserData'));
  }
}
