import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  URL=environment.urlBackend

  constructor(private http:HttpClient) { }
  getAllcat(){
    return this.http.get<any>(`${this.URL}`+'category/',)

  }

  Addcat(body){
    return this.http.post<any>(`${this.URL}`+'category/',body)

  }

  Deletecat(id){
    return this.http.delete<any>(`${this.URL}category/${id}`)

  }

  Updatecat(idCat,category){
    return this.http.put<any>(`${this.URL}category/${idCat}`,category)

  }
}