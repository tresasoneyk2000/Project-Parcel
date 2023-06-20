import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signup } from './model/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseURL = "http://localhost:8090/customer";

  constructor(private httpClient: HttpClient) { }
  addParcel(signup:Signup): Observable<Signup>{
  return this.httpClient.post<Signup>(`${this.baseURL}/create`, signup);
  
    }
}
