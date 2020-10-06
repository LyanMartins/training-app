import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/feature/domain/entity/Item';

@Component({
  selector: 'app-list-item-page',
  templateUrl: './list-item-page.component.html',
  styleUrls: ['./list-item-page.component.css']
})
export class ListItemPageComponent implements OnInit {

  @Input() item: Item;

  public config: any= {
    'title':'Lista de Items',
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
