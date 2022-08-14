import { Observable } from 'rxjs';
import { List } from '../entity/List';

export interface GetListInterface {

    execute(): Observable<List[]>;
}