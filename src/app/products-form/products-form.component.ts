import { Component, OnInit } from '@angular/core';

import { UploadFileService } from '../services/upload-file.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Producto } from '../Models/producto';
import { ProductoService } from '../services/producto.service';
import { FileUpload } from '../Models/file-upload';
const MAX_SIZE: number = 1048576;

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
  providers: [ProductoService]
})

export class ProductsFormComponent implements OnInit {
  // ^( )([a-zA-Z]*)      ^(?!\s)([a-zA-Z0-9 ]*)



  form1 = new FormGroup({
    'nombre': new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z][A-Za-z0-9 ]*'),
      //Validators.pattern('[a-zA-Z0-9 ]*')
    ]),
    'marca': new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z0-9][A-Za-z0-9 ]*')
    ]),
    'tipo': new FormControl('', [
      Validators.required,
    ]),
    'garantia': new FormControl('', [
      Validators.pattern('[0-3]?[0-9]'),
    ]),
    // 'codigo': new FormControl('', [
    //   Validators.required,
    //   Validators.pattern('[a-zA-Z0-9 ]*')
    // ]),
    'cantidad': new FormControl('', [
      Validators.required,
      Validators.pattern('[1-9][0-9]*')
    ]),
    'precio': new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')
    ]),
    'foto': new FormControl('', [
      Validators.required,
      // Validators.pattern('\.(jpg|png)$')
    ]),
  });
  base64: any;
  isSubmitted = false;
  theFile: any;

  attachedFile;
  imageSrc;

  selectedFiles: FileList;
  imageurl: any;

  constructor(private uploadService: UploadFileService, private productService: ProductoService) { }

  ngOnInit(): void {
  }

  upload() {
    this.imageurl = this.uploadService.uploadfile();

  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  onFileChange(event) {

    this.theFile = null;
    if (event.target.files && event.target.files.length > 0) {
      // Don't allow file sizes over 1MB
      if (event.target.files[0].size < MAX_SIZE) {
        // Set theFile property
        this.theFile = event.target.files[0];
      }
    }


    if (event.target.files.length > 0) {
      this.attachedFile = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => { this.imageSrc = reader.result; }


      reader.readAsDataURL(this.attachedFile);
    }
  }

  validateType(type) {
    if (type != 'image/jpeg' || type != 'image/jpg' || type != 'image/png') {
      console.log('here')
      alert("tipo de archivo invalido!!!")
    }
  }


  onSubmit(email: string, marca: string, tipo: string, garantia: number,
    cantidad: number, precio: number, especificaciones: string, image: any) {
    let file = new FileUpload();
    file.fileName = this.theFile.name;
    file.fileSize = this.theFile.size;
    file.fileType = this.theFile.type;
    file.lastModifiedTime = this.theFile.lastModified;
    file.lastModifiedDate = this.theFile.lastModifiedDate;
    file.fileAsBase64 = this.imageSrc;

    var newProduct = new Producto(email, marca, tipo, garantia, cantidad, precio, especificaciones, file)
    // if (newProduct) {
    //   this.validateType(file.fileType)
    // } else {

    if(file.fileType == 'image/jpeg' || file.fileType == 'image/jpg' || file.fileType == 'image/png'){

      this.productService.addProduct(newProduct).subscribe(
        item => console.log(item)
      )
      console.log('tipoooooooo', file.fileType)
      console.log('nuevo:', newProduct);
      alert('producto creado')
    }else {
      console.log('here')
      alert("tipo de archivo invalido!!!")
    }
    
  }

}
