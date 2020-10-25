import { Observable } from 'rxjs';
import {Item} from "../entity/Item";

export interface ListItemInterface {

    execute(): Item;
}