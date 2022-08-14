import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/feature/item/domain/entity/Item';
import { ListItem } from 'src/app/feature/item/domain/use_case/ListItem';

@Component({
  selector: 'app-list-item-page',
  templateUrl: './list-item-page.component.html',
  styleUrls: ['./list-item-page.component.css']
})
export class ListItemPageComponent implements OnInit {

  public config: any= {
    'title':'Lista de Items',
    'type':'item_page'
  }
  private listItem: ListItem;
  
  @Input() name;
  @Input() item: Item;

  constructor(listItem: ListItem) {
    this.listItem = listItem;
  }

  ngOnInit(): void {
    this.item = this.getList();
  }
  
  getList(){
    return this.listItem.execute();
  }

  reciverFeedback($event){
    this.item = $event
  }
  
}
