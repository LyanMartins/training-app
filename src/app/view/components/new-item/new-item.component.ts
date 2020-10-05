import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ItemService } from 'src/app/feature/data/data_source/ItemService';
import { Item } from 'src/app/feature/domain/entity/Item';
import { CreateItem } from 'src/app/feature/domain/use_case/CreateItem';
import { CreateItemInterface } from 'src/app/feature/domain/use_case/CreateItemInterface';
import { ListItem } from 'src/app/feature/domain/use_case/ListItem';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  private createItem: CreateItem;
  private listItem: ListItem;
  

  public form: FormGroup;
  @Output() responseEmitter = new EventEmitter();

  constructor(
    createItem: CreateItem,
    listItem: ListItem,
    private fb: FormBuilder
    ) {
    this.createItem = createItem;
    this.listItem = listItem;
    this.form = this.fb.group({
      name: ['',Validators.required],
      quantity: [''],
      price: ['']
    });
  }

  ngOnInit(): void {
  }

  createNewItem(){
    let form = this.form.value;
    let item = new Item(
      form.name,
      parseInt(form.quantity),
      true,
      parseFloat(form.price)
    );
    let data = this.createItem.execute(item);
    if(data)
      this.responseEmitter.emit(this.getList());
  }
  
  getList(){
    return this.listItem.execute();
  }

}
