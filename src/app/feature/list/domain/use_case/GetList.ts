import { Injectable } from '@angular/core';import { Observable } from 'rxjs';
import { ListRepository } from '../../data/repository/ListRepository';

import { List } from '../entity/List';
import { GetListInterface } from './GetListInterface';

@Injectable()
export class GetList implements GetListInterface{

    private listRepository: ListRepository;

    constructor(listRepository: ListRepository){
        this.listRepository = listRepository;
    }

    execute(): Observable<List[]>{
        return this.listRepository.getList();
        
    }
    
}