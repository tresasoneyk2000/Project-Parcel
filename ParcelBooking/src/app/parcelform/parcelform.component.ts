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
  // const uname = localStorage.getItem('uname') ?? '';
  sendername:string;

  receivername:string;

  senderaddress:string;

  recieveraddress:string;

  recieverPhno:number;

  parcel1:Parcel;

  parcel2:Parcel;

  submitted = false;

  submits=false;
  id:number|null;

  successMessage: string;
  falimessage:string;

  // id:number;
  
  
  // uname: any;

 constructor(private parcelservice:ParcelService, private router:Router){
    
  
  }




   add(){
    const uname= localStorage.getItem('uname') ?? '';
     this.submitted = true;
   
     this.parcel1= {id:null,sendername:this.sendername,receivername:this.receivername,senderaddress:this.senderaddress,recieveraddress:this.recieveraddress,recieverPhno:this.recieverPhno,username:uname};

     console.log(this.parcel1);
     if(this.parcel1 != null){
     this.parcelservice.addParcel(this.parcel1).subscribe(data=>{

      this.successMessage = 'Parcel added successfully';
      alert(this.successMessage);
      this.router.navigate(['/viewparcel']);
     
    
     },

     error=>{

      console.log('error');

     });
     this.falimessage='please fill the form';
     alert(this.falimessage);
    }
  }}