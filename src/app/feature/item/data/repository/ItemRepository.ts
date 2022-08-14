import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Item } from '../../domain/entity/Item';
import { ItemRepositoryInterface } from '../../domain/repository/ItemRepositoryInterface';
import { ItemService } from '../data_source/ItemService';

@Injectable()
export class ItemRepository implements ItemRepositoryInterface{

    private itemService: ItemService;

    constructor(itemService: ItemService){
        this.itemService = itemService;
        console.log("entrou no repository");
    }
    listItem(): Item {
        let list = this.itemService.listItem();
        let nlist = list.pipe(
            map(v => console.log(v))
        )
        console.log(nlist);
        return new Item('nok',1, true, 5.5);
    }

    createItem(item: Item): Item {
        let returne = this.itemService.createItem(item.fromEntity());
        return returne.toEntity();
    }
    
}