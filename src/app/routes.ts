import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ComputacionComponent } from './categorias/computacion/computacion.component';
import { ElctronicoComponent } from './categorias/elctronico/elctronico.component';
import { ElectrodomesticoComponent } from './categorias/electrodomestico/electrodomestico.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { MostrarProductosComponent } from './mostrar-productos/mostrar-productos.component';


export const appRoutes: Routes = [
    {path: 'products-form', component: ProductsFormComponent},
    {path: 'electrodomestico', component: ElectrodomesticoComponent},
    {path: 'computacion', component: ComputacionComponent},
    {path: 'electronicos', component: ElctronicoComponent},
    {path: 'home', component: MostrarProductosComponent},
    {path: '', redirectTo:'home', pathMatch: 'full'},
]