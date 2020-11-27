import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-electrodomestico',
  templateUrl: './electrodomestico.component.html',
  styleUrls: ['./electrodomestico.component.css']
})
export class ElectrodomesticoComponent implements OnInit {

  products:any[] = []

  constructor(public productService: ProductoService) { }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.productService.getProductsByElectrodomestico()
    .subscribe(
      item => {
        this.products = item;
        console.log(item)
      },
      err => console.log(err)
    )
  }

}
