export class Parcel {
    id: number;
    receivername:string;
    weight: number;
    // type: string;
    // price:number;
    senderAddress: string;
    receiverAddress: string;
    mobnumber:number;
  
    constructor(
      id: number,
      receivername:string,
      weight: number,
    //   type: string,
    //   price:number,
      senderAddress: string,
      receiverAddress: string,
      mobnumber:number
    ) {
      this.id = id;
      this.weight = weight;
    //   this.price=price;
      this.receivername=receivername;
    //   this.type = type;
      this.senderAddress = senderAddress;
      this.receiverAddress = receiverAddress;
      this.mobnumber=mobnumber;
    }
  }
  