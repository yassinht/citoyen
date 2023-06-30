import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  URL=environment.urlBackend
  helper = new JwtHelperService();

  constructor(private http:HttpClient) { }


  getAllrec(){
    return this.http.get<any>(`${this.URL}`+'reclamation/',)

  }

  Addrec(body){
    return this.http.post<any>(`${this.URL}`+'reclamation/',body)

  }

  Deleterec(id){
    return this.http.delete<any>(`${this.URL}reclamation/${id}`)

  }

  Updaterec(reclamation){
    return this.http.delete<any>(`${this.URL}reclamation/${reclamation._id}`,reclamation)

  }
  affectrecToBureau(idrec,idb,body){
    return this.http.put<any>(`${this.URL}asseign/${idrec}/assigntoBureau/${idb}`,body)

  }


  affectrecToMission(idrec,idb,body){
    return this.http.put<any>(`${this.URL}asseign/${idrec}/assigntoMission/${idb}`,body)

  }

  getRecBureau(idb){
    return this.http.get<any>(`${this.URL}asseign/assignReclamations/bureau/${idb}`)

  }


}
