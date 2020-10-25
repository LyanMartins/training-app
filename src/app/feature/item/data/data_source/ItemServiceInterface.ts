import { Observable } from 'rxjs';
import { ItemModel } from '../model/ItemModel';

export interface ItemServiceInterface {

    createItem(item: ItemModel): ItemModel;

     listItem(): Observable<ItemModel[]> ;

}