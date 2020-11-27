import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../Models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categorias: Categoria[] = [
    {
      id: 1,
      categoria: "computacion"
    },
    {
      id: 2,
      categoria: "electrodomestico"
    },
    {
      id: 3,
      categoria: "categoria3"
    },
    {
      id: 4,
      categoria: "categoria4"
    },
    {
      id: 5,
      categoria: "categoria5"
    },
    {
      id: 5,
      categoria: "categoria6"
    }
  ]
  constructor(private http: HttpClient) { }

  getCategorias(): Categoria[]{
    return this.categorias;
  }

}
