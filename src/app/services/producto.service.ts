import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../Models/producto';


const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json',
                                               'Access-Control-Allow-Origin':'*',
                                               'Access-Control-Allow-Methods': 'POST'})};


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  // getProducts(){
  //   return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts?_limit=6');
  // }

  getProductsByComputacion(){
    return this.http.get<any[]>('http://127.0.0.1:5000/products/computacion')
  }

  getProductsByElectrodomestico(){
    return this.http.get<any[]>('http://127.0.0.1:5000/products/electrodomestico')
  }

  getProductsByElectronico(){
    return this.http.get<any[]>('http://127.0.0.1:5000/products/electronicos')
  }

  addProduct(product: Producto){
    let postProduct = 'http://127.0.0.1:5000/products/'
    return this.http.post<Producto>(postProduct, product, httpOptions)
  }

  getProductsAll(){
    return this.http.get<any[]>("http://127.0.0.1:5000/products/")
  }

  getProductSearched(buscado:string){
    console.log(buscado)
    return this.http.get<any[]>('http://127.0.0.1:5000/productsOrdered/'.concat(buscado)) 
  }

  // http://127.0.0.1:5000/products

}
