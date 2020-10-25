import { Injectable } from '@angular/core';import { Observable } from 'rxjs';
import { ListRepository } from '../../data/repository/ListRepository';

import { List } from '../entity/List';
import { CreateListInterface } from './CreateListInterface';

@Injectable()
export class CreateList implements CreateListInterface{

    private listRepository: ListRepository;

    constructor(listRepository: ListRepository){
        this.listRepository = listRepository;
    }

    execute(input: any): Observable<List>{
        return this.listRepository.createList(input);
        
    }
    
}