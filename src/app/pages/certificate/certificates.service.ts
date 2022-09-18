import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from 'src/app/_auth/user-auth.service';
import { PvModel } from './pv-model';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  private apiUrl="http://localhost:8080/";
  requestHeader = new HttpHeaders(
    { Authorization:localStorage.getItem('jwtToken')! }
  );

  constructor(private http: HttpClient,
    private userAuthService: UserAuthService) { }

  getsurveillantPvs(id: any){
    
    return this.http.get<PvModel[]>(this.apiUrl+"pv/surveillant/"+id);
  }
}
