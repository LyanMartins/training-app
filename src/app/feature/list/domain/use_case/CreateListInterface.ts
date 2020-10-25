import { Observable } from 'rxjs';
import { List } from '../entity/List';

export interface CreateListInterface {

    execute(input: any): Observable<List>

}