import { FileUpload } from './file-upload';

export class Producto {
    cantprod: number;
    categoria: string;
    
    especif: string
    garant: number;
    marcaprod: string;
    nomprod: string;
    precio: number;
    image: any;

    constructor(nombre: string, marca: string, tipo: string, garantia: number, cantidad: number, precio: number, especificaciones: string, image:any){
        this.nomprod = nombre;
        this.marcaprod = marca;
        this.categoria = tipo;
        
        this.garant = garantia as number;
        this.cantprod = cantidad as number;
        this.precio = precio as number;
        this.especif = especificaciones;
        this.image = image;
    }
}