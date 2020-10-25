import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/feature/item/domain/entity/Item';
import { List } from 'src/app/feature/list/domain/entity/List';
import { GetList } from 'src/app/feature/list/domain/use_case/GetList';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  public GetList: GetList;

  @Input() list: List[];

  public config: any= {
    'title':'Listas',
    'type':'list_page'
  }

  constructor(GetList: GetList) {
    this.GetList = GetList;
  }
  
  ngOnInit(): void { }

  ngAfterViewInit(){
    this.getList().subscribe(value => {
      this.list = value;
    })
  }
  getList(){
    return this.GetList.execute();
  }
  
  reciverFeedback($event){
    this.list = $event
  }
  
}
