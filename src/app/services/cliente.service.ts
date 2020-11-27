import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../Models/cliente';
import { Observable } from 'rxjs';
const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json',
                                               'Access-Control-Allow-Origin':'*',
                                               'Access-Control-Allow-Methods': 'POST'})};
const base_route = "https://search-it-api.herokuapp.com"

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  addClient(cliente:Cliente ): Observable<any>{
    let postCliente = `${base_route}/usuarios/`
    return this.http.post<Cliente>(postCliente, cliente, httpOptions)
  }
  getClientByEmail(nombre:string) {
    return  this.http.get<any[]>(`${base_route}/usuarios/email/`.concat(nombre))
   
  }
}
