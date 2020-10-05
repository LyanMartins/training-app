import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/feature/domain/entity/Item';
import { ListItem } from 'src/app/feature/domain/use_case/ListItem';
import { ListItemComponent } from '../../components/list-item/list-item.component';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  @Input() item: Item;

  public config: any= {
    'title':'Items',
    'type':'item_page'
  }

  constructor() {
  }
  
  ngOnInit(): void {
  }

  reciverFeedback($event){
    this.item = $event
  }
  
}
