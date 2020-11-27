import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class BuscarService{
    sendMessage = new Subject();
    constructor(){}

    buscar(msg){
        this.sendMessage.next(msg);
    }


}