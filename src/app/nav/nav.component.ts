import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Models/categoria';
import { CategoriaService } from '../services/categoria.service';
import { BuscarService } from '../services/buscar.service';
import { ShowProductsService } from '../services/show-products.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  categorias: Categoria[];
  
  hide
  constructor(private categoriaService: CategoriaService, public buscar: BuscarService, public state: ShowProductsService) { }

  ngOnInit(): void {
    this.getCategorias()
    // this.state.getState()
    // .subscribe(
    //   item => {
    //     this.hide = item;
    //     console.log(item)
    //   },
    //   err => console.log(err)
    // )
  }

  getCategorias(){
    return this.categorias = this.categoriaService.getCategorias();

  }

  getText(items){
    console.log(items)
    this.buscar.buscar(items)
  }

  
}
