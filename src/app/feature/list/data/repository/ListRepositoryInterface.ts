import { Observable } from 'rxjs';
import { List } from '../../domain/entity/List';

export interface ListRepositoryInterface {

    getList(): Observable<List[]>;

    createList(input: any): Observable<List>;
}