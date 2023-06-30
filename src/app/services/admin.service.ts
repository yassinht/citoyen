import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  URL=environment.urlBackend

  helper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) { }




  loginSAdmin(body: any) {
    return this.http.post(`${this.URL}`+'admin/login', body)


  }

  saveDataAdmin(token: any) {

    let decodeToken = this.helper.decodeToken(token)

    localStorage.setItem('token_admin', token)
    localStorage.setItem('role', decodeToken.subject.role)
    localStorage.setItem('id_admin', decodeToken.subject._id)

    console.log(decodeToken)
  }
  geid(){
    let id =localStorage.getItem('id_admin')



     return id

   }
  getNameAdmin() {
    let token: any = localStorage.getItem('token_admin')
    let decodeToken = this.helper.decodeToken(token)
    return decodeToken.subject.name
  }
  getUsername(){
    let token:any=localStorage.getItem('token_admin')
 /*    console.log(token) */

    let decodeToken= this.helper.decodeToken(token)



     return decodeToken.subject

   }

   LoggedInAdmin(){
    let token:any=localStorage.getItem('token_admin')

    if(!token){
      return false
     }
     if(this.helper.isTokenExpired(token)){
       return false
     }

     return true


  }


}
