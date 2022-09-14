import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PvModel } from './pv-model';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  private apiUrl="http://localhost:8080/pv/surveillant/1";

  constructor(private http: HttpClient) { }

  getsurveillantPvs(){
    return this.http.get<PvModel[]>(this.apiUrl)
  }
}
