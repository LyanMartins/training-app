import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../../domain/entity/List';
import { ListService } from '../data_source/ListService';
import { ListRepositoryInterface } from './ListRepositoryInterface';

@Injectable()
export class ListRepository implements ListRepositoryInterface {
    
    constructor(private listService: ListService){
        this.listService = listService;
    }
    createList(input: any): Observable<List> {
        let list = this.listService.createList(input)
        return list;
    }

    getList(): Observable<List[]> {
        let list = this.listService.getList();
        return list;
    }

}