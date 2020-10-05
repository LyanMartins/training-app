import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemModel } from '../model/ItemModel';
import { ItemServiceInterface } from './ItemServiceInterface';

@Injectable()
export class ItemService implements ItemServiceInterface {

    constructor(){
        console.log("dentro do service");
    }
    listItem(): ItemModel {
        let data = localStorage.getItem("item");
        let newItem :ItemModel = JSON.parse(data);
        newItem = new ItemModel(newItem.name, newItem.quantity,newItem.checked,newItem.price)
        return newItem;
    }

    createItem(item: ItemModel): ItemModel {
        let old = localStorage.getItem("item");
        localStorage.setItem("item",JSON.stringify(item))
        let data = localStorage.getItem("item");
        let newItem :ItemModel = JSON.parse(data);
        newItem = new ItemModel(newItem.name, newItem.quantity,newItem.checked,newItem.price)
        return newItem;
    }

}