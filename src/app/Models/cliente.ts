import { EmailValidator } from '@angular/forms';

export class Cliente {
    nomusuario: string;
    apeusuario: string;
    
    fechaNac: Date;
    email: string;
    telefono: number;
    password : string;
    alias:string;


    constructor( nomusuario: string,apeusuario: string,fechaNac: Date,email: string,telefono: number,password : string,alias:string){
        this.nomusuario = nomusuario;
        this.apeusuario = apeusuario;
        this.fechaNac = fechaNac;
        
        this.email = email ;
        this.telefono = telefono as number;
        this.password= password;
        this.alias= alias;
    }
}