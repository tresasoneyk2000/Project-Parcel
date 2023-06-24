import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parcel } from './model/parcel.model';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {
  [x: string]: any;
  private baseURL = "http://localhost:8090/parcels";

constructor(private httpClient: HttpClient) { }
addParcel(parcel:Parcel): Observable<Parcel>{
return this.httpClient.post<Parcel>(`${this.baseURL}/add`, parcel);

  }

  // fetchdetailsbyusrename(username:string){
  //   return this.httpClient.get<Parcel[]>(`${this.baseURL}/fetchbyusername/{${username}`);
  // }
  
  fetchdetailsbyusrename(uname:string): Observable<Parcel[]> {
    return this.httpClient.get<Parcel[]>(`${this.baseURL}/fetchbyusername/${uname}`);
  }
  viewdetaileach(id:number){
    return this.httpClient.get<Parcel>(`${this.baseURL}/getbyid/${id}`);
  
}
}