import { Component } from '@angular/core';

@Component({
  selector: 'app-parcelform',
  templateUrl: './parcelform.component.html',
  styleUrls: ['./parcelform.component.css']
})
export class ParcelformComponent {
  id: number | undefined;
  receivername:string | undefined;
  weight: number | undefined;
  // type: string;
  // price:number;
  mobnumber:number | undefined;
  senderAddress: string | undefined;
  receiverAddress: string | undefined;

}
