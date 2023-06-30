import { Injectable } from '@angular/core';
import { HttpClient,  HttpEvent,  HttpHandler,  HttpHeaders, HttpParams, HttpRequest  } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AgentMService {
  URL=environment.urlBackend

  constructor(private http:HttpClient) { }


  getAgentM(){
    return this.http.get<any>(`${this.URL}`+'agentM/',)

  }

  AddAgentM(body){
    return this.http.post<any>(`${this.URL}`+'agentM/',body)

  }

  DeleteAgentM(id){
    return this.http.delete<any>(`${this.URL}agentM/${id}`)

  }

  UpdateAgentM(AgentM,id){
    return this.http.put<any>(`${this.URL}agentM/${id}`,AgentM)

  }
}
