import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signup } from './model/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseURL = "http://localhost:8091/customer";

  constructor(private httpClient: HttpClient) { }
  addParcel(signup:Signup): Observable<Signup>{
  return this.httpClient.post<Signup>(`${this.baseURL}/create`, signup);
  
    }
    private apiUrl = 'http://localhost:8091/customer'; // Replace with your backend API URL

    
  
    checkUsernameExists(username: string) {
      return this.httpClient.get<boolean>(`${this.apiUrl}/checkusername/${username}`);
    }

    logincheck(username:string,password:string){
      return this.httpClient.get<boolean>(`${this.apiUrl}/login/${username}/${password}`);
    }
}
