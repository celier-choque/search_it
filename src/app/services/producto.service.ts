import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../Models/producto';


const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json',
                                               'Access-Control-Allow-Origin':'*',
                                               'Access-Control-Allow-Methods': 'POST'})};
const base_route = "https://search-it-api.herokuapp.com"

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getProductsByComputacion(){
    return this.http.get<any[]>(base_route + '/products/computacion')
  }

  getProductsByElectrodomestico(){
    return this.http.get<any[]>(base_route + '/products/electrodomestico')
  }

  getProductsByElectronico(){
    return this.http.get<any[]>(base_route + '/products/electronicos')
  }

  addProduct(product: Producto){
    let postProduct = base_route + '/products/'
    return this.http.post<Producto>(postProduct, product, httpOptions)
  }

  getProductsAll(){
    return this.http.get<any[]>(base_route + "/products/")
  }

  getProductSearched(buscado:string){
    console.log(buscado)
    return this.http.get<any[]>(base_route + '/productsOrdered/'.concat(buscado)) 
  }

  // http://127.0.0.1:5000/products

}
