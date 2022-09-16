import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import {catchError, map} from "rxjs/operators";
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  [x: string]: any;

private apiUrl="http://localhost:8080/login";
requestHeader = new HttpHeaders(
  { "No-Auth":"True" }
);

  constructor(private http: HttpClient,
    private userAuthService: UserAuthService) { }

  public login(loginData:any){
  
    return this.http.post(this.apiUrl, loginData, { headers: this.requestHeader });
  }

  public roleMatch(allowedRoles:any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();
    
    

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].authority === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }
}
