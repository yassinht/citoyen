import { Injectable } from '@angular/core';
import { HttpClient,  HttpEvent,  HttpHandler,  HttpHeaders, HttpParams, HttpRequest  } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AffectRecService {
  URL=environment.urlBackend

  constructor() { }
}
