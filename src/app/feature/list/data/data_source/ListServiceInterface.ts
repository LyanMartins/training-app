import { Observable } from 'rxjs';
import { ListModel } from '../model/ListModel';

export interface ListServiceInterface {

    getList(): Observable<ListModel[]>;

    createList(input: any): Observable<ListModel>;
}