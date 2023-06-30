import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitoyenService {
  URL=environment.urlBackend
  constructor(private http:HttpClient) { }
  
  getAllCitoyen(){
    return this.http.get<any>(`${this.URL}`+'citoyen/',)

  }

  AddCitoyen(body){
    return this.http.post<any>(`${this.URL}`+'citoyen/',body)

  }

  DeleteCitoyen(id){
    return this.http.delete<any>(`${this.URL}citoyen/${id}`)
  }

  UpdateCitoyen(agent,idcit){
    return this.http.put<any>(`${this.URL}citoyen/${idcit}`,agent)

  }

}
