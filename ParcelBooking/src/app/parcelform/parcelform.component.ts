import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Parcel } from '../model/parcel.model';
import { ParcelService } from '../parcel.service';

@Component({
  selector: 'app-parcelform',
  templateUrl: './parcelform.component.html',
  styleUrls: ['./parcelform.component.css']
})
export class ParcelformComponent {
  sendername:string;

  receivername:string;

  senderaddress:string;

  recieveraddress:string;

  recieverPhno:number;

  parcel1:Parcel;

  parcel2:Parcel;

  submitted = false;

  submits=false;

  successMessage: string;




  id:number;

 




  constructor(private parcelservice:ParcelService, private router:Router){}




   add(){

     this.submitted = true;

     this.parcel1= {sendername:this.sendername,receivername:this.receivername,senderaddress:this.senderaddress,recieveraddress:this.recieveraddress,recieverPhno:this.recieverPhno};

     console.log(this.parcel1);

     this.parcelservice.addParcel(this.parcel1).subscribe(data=>{

      this.successMessage = 'Parcel added successfully';
      alert(this.successMessage);
      this.router.navigate(['/viewparcel']);

     },

     error=>{

      console.log('error');

     });

    }}