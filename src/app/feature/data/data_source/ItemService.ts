import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Api } from 'src/app/common/service/api';
import { ItemModel } from '../model/ItemModel';
import { ItemServiceInterface } from './ItemServiceInterface';

@Injectable()
export class ItemService extends Api implements ItemServiceInterface {

    constructor(private httpClient: HttpClient){
        super();
        console.log("dentro do service");
    }
    listItem(): Observable<ItemModel[]> {
        var litem: ItemModel[];
        let item = this.httpClient.get<ItemModel[]>(this.url+'list')
        console.log("aq");
        console.log(item);
        return item;
    }

    createItem(item: ItemModel): ItemModel {

    }

}