import { Observable } from 'rxjs';
import {Item} from "../entity/Item";

export interface ItemRepositoryInterface {

    createItem(item: Item): Item;

    listItem(): Item;
}