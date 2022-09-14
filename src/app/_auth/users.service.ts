import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

private apiUrl="http://localhost:8080/login";
requestHeader = new HttpHeaders(
  { "No-Auth":"True" }
);

  constructor(private http: HttpClient) { }

  public login(username: string, password: string){
    let info={
      "username": username,
      "password": password,
  }
    return this.http.post(this.apiUrl,JSON.stringify(info))
    .pipe(
      map((user) => {
        console.log("User  :  ",user)
        console.log("JSON User  :  ",JSON.stringify(user));
      return user;
      

    },)
    );
  }
}
