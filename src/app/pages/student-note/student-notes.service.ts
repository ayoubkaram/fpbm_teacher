import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentNote } from './student-note';

@Injectable({
  providedIn: 'root'
})
export class StudentNotesService {

  private apiUrl="http://localhost:8080/students/hasmodule/";

  constructor(private http : HttpClient) { }

  fetchAllStudent(module : any){
    return this.http.get<StudentNote[]>(this.apiUrl+module);
  }
}
