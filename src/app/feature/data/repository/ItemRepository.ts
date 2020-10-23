import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../domain/entity/Item';
import { ItemRepositoryInterface } from '../../domain/repository/ItemRepositoryInterface';
import { ItemService } from '../data_source/ItemService';
import { ItemServiceInterface } from '../data_source/ItemServiceInterface';

@Injectable()
export class ItemRepository implements ItemRepositoryInterface{

    private itemService: ItemService;

    constructor(itemService: ItemService){
        this.itemService = itemService;
        console.log("entrou no repository");
    }
    listItem(): Item {
        let list = this.itemService.listItem();
        console.log(list);
        return list;
    }

    createItem(item: Item): Item {
        let returne = this.itemService.createItem(item.fromEntity());
        return returne.toEntity();
    }
    
}