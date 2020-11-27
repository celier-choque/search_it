import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { ShowProductsService } from 'src/app/services/show-products.service';

@Component({
  selector: 'app-computacion',
  templateUrl: './computacion.component.html',
  styleUrls: ['./computacion.component.css']
})
export class ComputacionComponent implements OnInit {

  products:any[] = []
  hide;

  constructor(public productService: ProductoService, public state: ShowProductsService) { }

  ngOnInit() {
    this.getProducts()
    this.hide = this.state.setStateHide();
  }

  getProducts(){
    this.productService.getProductsByComputacion()
    .subscribe(
      item => {
        this.products = item;
        console.log(item)
      },
      err => console.log(err)
    )
  }

}
