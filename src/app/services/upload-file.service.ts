import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  url: any;

  constructor() { }

  uploadfile(){
    this.url = "https://4.imimg.com/data4/EC/GV/MY-14256363/rose-flower-500x500.jpg";
    return this.url;
  }

}
