import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '../Models/cliente';
import { ClienteService } from '../services/cliente.service';
import {Router} from '@angular/router';
import * as CryptoJS from 'crypto-js';
 
@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css'],
 
})
export class RegisterClientComponent implements OnInit {
  
  encrypted: any = "";
  decrypted: string;
  
  message = "";
  textToConvert: string;
  
  lista1: any[]
  num:Number;
  textoEncriptado: string;
  encPass: string="holo";
 
  form1 = new FormGroup({
    'nombre': new FormControl('', [
      Validators.required,
      Validators.maxLength(25),
      //Validators.pattern('[A-Za-z][A-Za-z]*'),
      Validators.pattern('([A-ZÑ][a-zñ]*)([\\s\\\'-][A-ZÑ][a-zñ]*){0,1}[ ]*'),
      
    ]),
    'apellidos': new FormControl('', [
      Validators.required,
      Validators.maxLength(25),
      //Validators.pattern('[A-Za-z][A-Za-z]*'),
      Validators.pattern('([A-ZÑ][a-zñ]*)([\\s\\\'-][A-ZÑ][a-zñ]*){0,1}[ ]*'),
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
      Validators.maxLength(15),
      Validators.pattern('[A-ZÑ-ña-z0-9][A-ZÑ-ña-z0-9]*[ ]*'),
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
  var ali=this.caracter("abcd     ");
  console.log(ali);
 
 }
 
  prueba(item){
    console.log(item.length)
  }
  onSubmit(nombre: string,apellidos: string,email: string,telefono: number,fecha: Date,alias:string,pass : string,confirpass: string) {
    let fecha1 = new Date(fecha);
    let fecha2 = new Date()
    var h=0;
    var ali=this.caracter(alias);
    console.log(ali);
    let resta = fecha2.getTime() - fecha1.getTime()
    resta=resta/ (1000*60*60*24);
    if(resta>6570 && resta<= 29220){
      console.log(resta)
      if(pass===confirpass){
        this.encript()
        console.log(this.encrypted.toString())
        this.clienteService.getClientByEmail(email).subscribe(
          (item:any[]) => {
            console.log(item.length);
            console.log(item)
            this.prueba(item);
            
            if(item.length==0){
            //  this.textoEncriptado = CryptoJS.AES.encrypt(pass.trim(), this.encPass.trim()).toString();
              //this.textoDesencriptado = CryptoJS.AES.decrypt(this.destexto.trim(), this.desPass.trim()).toString(CryptoJS.enc.Utf8);

              this.encrypted = CryptoJS.AES.encrypt(this.message, this.form1.value.pass);
              var newClient = new Cliente(nombre, apellidos, fecha, email, telefono, pass, alias)
             console.log()
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
      alert("El usuario no cumple con los requisitos de edad permitida,el rango valido es entre 18 y 80 años")
}

}
  caracter(palabra: string){
    var g="";
    var p ;
    for (var _i = 0; _i < palabra.length; _i++) {
       p = palabra[_i];
       console.log(p);
     // g=palabra[_i];
      if(p!=" "){
        
        g=g+""+palabra[_i];
        
      }   
    }
    console.log(g);
    return g;
  }
 
cancel(){
  this.router.navigate(['/home'])
}

encript(){
  this.encrypted = CryptoJS.AES.encrypt(this.message, this.form1.value.pass);
  console.log('encrypted', this.encrypted.toString() );
  this.decript()
}

decript(){
  var decrypted = CryptoJS.AES.decrypt(this.encrypted, this.form1.value.pass);
  this.decrypted = decrypted.toString(CryptoJS.enc.Utf8);
  console.log('decripted');
}
 
 
}
 

