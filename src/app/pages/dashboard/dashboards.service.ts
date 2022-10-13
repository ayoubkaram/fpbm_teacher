import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardsService {

  private apiUrl="http://localhost:8080/module/professeur/1";

  constructor(private http : HttpClient) { }

  fetchAllStudent(){
    return this.http.get(this.apiUrl);
  }
}
