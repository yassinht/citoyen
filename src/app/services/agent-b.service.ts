import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AgentBService {
  URL=environment.urlBackend
  helper = new JwtHelperService();

  constructor(private http:HttpClient) { }


     getAllAgentB(){
      return this.http.get<any>(`${this.URL}`+'agentB/',)
  
    }

    AddAgentB(body){
      return this.http.post<any>(`${this.URL}`+'agentB/',body)
  
    }

    DeleteAgentB(id){
      return this.http.delete<any>(`${this.URL}agentB/${id}`)
  
    }

    UpdateAgentB(agent,idAgent){
      return this.http.put<any>(`${this.URL}agentB/${idAgent}`,agent)
  
    }

    loginagentB(body: any) {
      return this.http.post(`${this.URL}`+'agentB/login', body)
  
  
    }


    saveDataAdmin(token: any) {

      let decodeToken = this.helper.decodeToken(token.token);
  
      localStorage.setItem('token_agentB', token)
      localStorage.setItem('role', decodeToken.subject.role)
      localStorage.setItem('id_agentB', decodeToken.subject._id)
  
      console.log(decodeToken)
    }
    geid(){
      let id =localStorage.getItem('id_agentB')
  
  
  
       return id
  
     }
    getNameAdmin() {
      let token: any = localStorage.getItem('token_agentB')
      let decodeToken = this.helper.decodeToken(token)
      return decodeToken.subject.name
    }
    getUsername(){
      let token:any=localStorage.getItem('token_agentB')
   /*    console.log(token) */
  
      let decodeToken= this.helper.decodeToken(token)
  
  
  
       return decodeToken.subject
  
     }
  
     LoggedInAdmin(){
      let token:any=localStorage.getItem('token_agentB')
  
      if(!token){
        return false
       }
       if(this.helper.isTokenExpired(token)){
         return false
       }
  
       return true
  
  
    }
}
