import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { BuscarService } from 'src/app/services/buscar.service';
import { ICarouselItem } from '../carousel/Icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from '../constants/carousel.const';
import { ShowProductsService } from '../services/show-products.service';
  
@Component({
  selector: 'app-mostrar-productos',
  templateUrl: './mostrar-productos.component.html',
  styleUrls: ['./mostrar-productos.component.css']
})
export class MostrarProductosComponent implements OnInit {
  hide: boolean;
  products:any[] = []
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  constructor(public productService: ProductoService,public buscado: BuscarService, public state: ShowProductsService) {}

  ngOnInit() {
    this.state.setStateShow();
    this.getProductsAll()
    this.buscado.sendMessage.subscribe(msg => {
      this.getProductsSearched(msg)
    }); 
    
    
  }

  getProductsAll(){
  this.productService.getProductsAll()
  .subscribe(
    item => {
      this.products = item;
      console.log(item)
    },
    err => console.log(err)
  )}

  getProductsSearched(mensaje){
    this.productService.getProductSearched(mensaje)
    .subscribe(
      item => {
        this.products = item;
        console.log(item)
      },
      err => console.log(err)
    )}

}
