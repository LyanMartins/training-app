import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class Api{

    public url:string = 'https://mercado-list.herokuapp.com/';

    public httpOptions:any = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    
}