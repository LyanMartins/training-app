import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/feature/domain/entity/Item';
import { ListItem } from 'src/app/feature/domain/use_case/ListItem';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  private listItem: ListItem;
  
  @Input() name;
  @Input() item: Item;

  constructor(listItem: ListItem) {
    console.log("carai");
    this.listItem = listItem;
  }

  ngOnInit(): void {
    this.item = this.getList();
  }
  
  getList(){
    return this.listItem.execute();
  }

}
