import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatRecService {
  URL=environment.urlBackend

  constructor(private http:HttpClient) { }
  getAllcat(){
    return this.http.get<any>(`${this.URL}`+'catRec/',)

  }

  Addcat(body){
    return this.http.post<any>(`${this.URL}`+'catRec/',body)

  }

  Deletecat(id){
    return this.http.delete<any>(`${this.URL}catRec/${id}`)

  }

  Updatecat(idCat,category){
    return this.http.put<any>(`${this.URL}catRec/${idCat}`,category)

  }
}