import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '../Models/cliente';
import { ClienteService } from '../services/cliente.service';
import {Router} from '@angular/router';
//import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css'],

})
export class RegisterClientComponent implements OnInit {
  lista1: any[]
  num:Number;
  textoEncriptado: string;
  encPass: string="holo";

  form1 = new FormGroup({
    'nombre': new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z][A-Za-z]*'),
    ]),
    'apellidos': new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z][A-Za-z]*'),
    ]),
    'email': new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ]),

    'fecha': new FormControl('', [
      Validators.required,
    
    ]),
    'telefono': new FormControl('', [
      Validators.required,
      Validators.pattern('[6-7][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
    ]),
    'alias': new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z][A-Za-z0-9]*'),
    ]),
    'pass': new FormControl('', [
      Validators.required, 
      //Validators.pattern('[[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*[A-Z][A-Za-z0-9]*'),
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$'),
    ]),
    'confirpass': new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$'),
    ]),

  });
  constructor(public clienteService: ClienteService,public router:Router) { 
  }
 ngOnInit(){

 }

  prueba(item){
    console.log(item.length)
  }
  onSubmit(nombre: string,apellidos: string,email: string,telefono: number,fecha: Date,alias:string,pass : string,confirpass: string) {
    let fecha1 = new Date(fecha);
    let fecha2 = new Date()
    var h=0;
 
    let resta = fecha2.getTime() - fecha1.getTime()
    resta=resta/ (1000*60*60*24);
    if(resta>6570){
      console.log(resta)
      if(pass===confirpass){
       
        this.clienteService.getClientByEmail(email).subscribe(
          (item:any[]) => {
            console.log(item.length);
            console.log(item)
            this.prueba(item);
            if(item.length==0){
            //  this.textoEncriptado = CryptoJS.AES.encrypt(pass.trim(), this.encPass.trim()).toString();
              //this.textoDesencriptado = CryptoJS.AES.decrypt(this.destexto.trim(), this.desPass.trim()).toString(CryptoJS.enc.Utf8);
              var newClient = new Cliente(nombre, apellidos, fecha, email, telefono, pass, alias)
             
              this.clienteService.addClient(newClient).subscribe(
              item =>{
                 console.log(item)
                 alert('Usuario registrado correctamente');
                }           
              );         
            }
            else{
              alert('Ya existe una cuenta registrada con ese correo electronico')
            }
          }
         )   
     }

      else {
        console.log('here')
        alert("Las contraseñas no coinciden")
     } 
     }
      else{
      alert("El usuario no cumple con los requisitos de edad permitida")
}

}

cancel(){
  this.router.navigate(['/home'])
}


}
