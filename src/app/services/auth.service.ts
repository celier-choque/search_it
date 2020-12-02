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
export class AuthService {

  constructor(private http: HttpClient) { }

  getLogin(){
    return this.http.get<any[]>(base_route + '/login')
  }

  loginPost(login){
    let postProduct = base_route + '/login/'
    return this.http.post(postProduct, login, httpOptions)
  }

}
