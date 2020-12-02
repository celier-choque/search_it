import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria } from '../Models/categoria';
import { CategoriaService } from '../services/categoria.service';
import { BuscarService } from '../services/buscar.service';
import { ShowProductsService } from '../services/show-products.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { AuthService } from '../services/auth.service';

export class Login{
  alias:string;
  password:string;
  constructor(alias: string, password:string){
    this.alias=alias;
    this.password=password
  }
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // encryp
  //tokenFromUI: string = "0123456789123456";
  encrypted: any = "";
  decrypted: string;

  request: string;
  responce: string;
  //

  message = "";
  textToConvert: string;

  form1 = new FormGroup({
    'username': new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z][A-Za-z ]*'),
    ]),
    'password': new FormControl('',[
      Validators.required,
      Validators.pattern(''),
    ])
  });

  @ViewChild('closebutton') closebutton;

  status=false;
  categorias: Categoria[];

  model: any = {username:'', password:this.encrypted};
  
  hide
  constructor(private loginService: AuthService, private categoriaService: CategoriaService, public buscar: BuscarService, public state: ShowProductsService ,public router:Router) 
  {
    
  }

  ngOnInit(): void {
    this.getCategorias()
    
  }

  login(){
    this.status=true;
    //console.log(this.model)
    //console.log("hhh",this.form1.value.username)
    //console.log(this.model)
    this.encript()
    var login = new Login(this.form1.value.username, this.encrypted.toString())
    var log={
      "alias": this.form1.value.username,
      "password": this.form1.value.password
    }
    console.log(log)
    this.loginService.loginPost(log).subscribe(
      item => console.log("respuesta",item)
    )
  }
  
  public onSave() {
    this.closebutton.nativeElement.click();
  }

  loggedIn(){
    
  }

  logout(){
    this.status=false;
  }



  getCategorias(){
    return this.categorias = this.categoriaService.getCategorias();

  }

  getText(items){
    console.log(items)
    this.buscar.buscar(items)
  }
  sendRegistro(){
    this.router.navigate(['/registro'])
  }

  encript(){
    this.encrypted = this.fakeMathRandom(() => CryptoJS.AES.encrypt(this.message, this.form1.value.password));
    //this.encrypted = CryptoJS.AES.encrypt(this.message, this.form1.value.password);
    console.log('encrypted', this.encrypted.toString() );
    this.decript()
  }

  decript(){
    var decrypted = CryptoJS.AES.decrypt(this.encrypted, this.form1.value.password);
    this.decrypted = decrypted.toString(CryptoJS.enc.Utf8);
    console.log('decripted');
  }

  fakeMathRandom(callBack) {
    if(!callBack) throw new Error("Must provide callBack function");
    //fake predefined output setup
    let seed=0;
    const randomOutputs = [0.04,0.08,0.15,0.16,0.23,0.42,0.52,0.65,0.79,0.89];
    //save nativeFunction
    const Math_random = Math.random;
    //change nativeFunction
    Math.random = function() {return randomOutputs[seed++ % 10];}
    //runs the callback
    const callbackOutput = callBack();
    //restore nativeFunction
    Math.random = Math_random; 
    return callbackOutput;
}
}
