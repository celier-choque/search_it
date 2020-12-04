import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../Models/producto';
import { map } from 'rxjs/operators'
import { Cliente } from '../Models/cliente';

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

  login(model: any){
    return this.http.post(base_route+'/login/', model).pipe(
      map((response:Cliente[])=>{
        const user: Cliente[]= response;
        console.log(user[0].alias)
        console.log(user.length)
        if(user.length==1){
          localStorage.setItem('user', user[0].alias)
        }
      })
    )
      
  }

}
