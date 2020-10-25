import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Api } from 'src/app/common/service/api';
import { ListModel } from '../model/ListModel';
import { ListServiceInterface } from './ListServiceInterface';

@Injectable()
export class ListService extends Api implements ListServiceInterface {

    constructor(private httpClient: HttpClient){
        super();
    }
    createList(input: any): Observable<ListModel> {
        let list = this.httpClient.post<ListModel>(`${this.url}list`,input).pipe(
            tap( // Log the result or error
                data => console.log(data),
                error => console.log(error)
              )
        )
        return list;
    }
    getList(): Observable<ListModel[]> {
        let list = this.httpClient.get<ListModel[]>(`${this.url}list`);
        return list;
    }

}