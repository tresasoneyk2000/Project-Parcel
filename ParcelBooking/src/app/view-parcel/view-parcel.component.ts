import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ParcelService } from '../parcel.service';
import { Parcel } from '../model/parcel.model';

@Component({
  selector: 'app-view-parcel',
  templateUrl: './view-parcel.component.html',
  styleUrls: ['./view-parcel.component.css']
})
export class ViewParcelComponent implements OnInit  {
  uname= localStorage.getItem('uname') ?? '';
 parcels: Parcel[] ;
 

  constructor(private http: HttpClient,private service:ParcelService) {}
  private baseURL = "http://localhost:8090/parcels";
  ngOnInit(): void {
    const username = 'example_user';
    this.fetchData();
  }
  fetchData(): void {
    this.service.fetchdetailsbyusrename(this.uname).subscribe((parcels: Parcel[]) => {
      this.parcels= parcels;
      console.log(parcels);
      // console.log(uname);
    });
  }
  // deleteProduct(productId: number): void {
  //   this.service.deleteProductById(productId).subscribe(() => {
  //     this.getProducts();
  //   });
  // }
  viewdetails(id: any):void {
    this.service.viewdetaileach(id).subscribe(() => {
      
    });}
//  fetchdetailsbyusrename(username:string){
//     return this.httpClient.get<Parcel[]>(`${this.baseURL}/fetchbyusername/{${username}`);
//   }
  
  // fetchData(uname: string): void {
  //   this.http.get<Parcel[]>('http://localhost:8090/parcels/fetchbyusername/${uname}', uname)
  //     .subscribe(
  //       (response: Parcel[]) => {
  //         // Assign the returned array to the component variable
  //         this.parcels = this.parcels;
  //         console.log(this.parcels);
  //       },
  //       (error: any) => {
  //         // Handle error
  //         console.error(error);
  //       }
  //      );
  // }

// users: Parcel[];

  // constructor(private userService: ParcelService) { }

  // getUserData( uname: string): void {
  //   this.userService.fetchdetailsbyusrename(uname)
  //     .subscribe((data: Parcel[]) => {
  //       this.users = data;
  //     });
  // }

}
