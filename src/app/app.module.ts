import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';
import { ElectrodomesticoComponent } from './categorias/electrodomestico/electrodomestico.component';
import { ComputacionComponent } from './categorias/computacion/computacion.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElctronicoComponent } from './categorias/elctronico/elctronico.component';
import { MostrarProductosComponent } from './mostrar-productos/mostrar-productos.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RegisterClientComponent } from './register-client/register-client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsFormComponent,
    ElectrodomesticoComponent,
    ComputacionComponent,
    ElctronicoComponent,
    MostrarProductosComponent,
    CarouselComponent,
    RegisterClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    CarouselComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
