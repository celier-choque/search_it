import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-elctronico',
  templateUrl: './elctronico.component.html',
  styleUrls: ['./elctronico.component.css']
})
export class ElctronicoComponent implements OnInit {

  products:any[] = []

  constructor(public productService: ProductoService) { }

  ngOnInit(){
    this.getElectronicos();
  }

  getElectronicos(){
    this.productService.getProductsByElectronico()
    .subscribe(
      item => {
        this.products = item;
        console.log(item)
      },
      err => console.log(err)
    )
  }

}
