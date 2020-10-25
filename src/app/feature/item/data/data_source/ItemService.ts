import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs';
import { Api } from 'src/app/common/service/api';
import { ItemModel } from '../model/ItemModel';
import { ItemServiceInterface } from './ItemServiceInterface';

@Injectable()
export class ItemService extends Api implements ItemServiceInterface {

    litem2;
    constructor(private httpClient: HttpClient){
        super();
        console.log("dentro do service");
    }
    listItem(): Observable<ItemModel[]> {
        let item = this.httpClient
            .get<ItemModel[]>(this.url + 'list/item',{headers: this.httpOptions})
        
        return item;
    }

    createItem(item: ItemModel): ItemModel {
            return new ItemModel('mock',1,true,3.5)
    }

}