import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/feature/item/domain/entity/Item';
import { CreateItem } from 'src/app/feature/item/domain/use_case/CreateItem';
import { ListItem } from 'src/app/feature/item/domain/use_case/ListItem';


@Component({
  selector: 'app-new-item-page',
  templateUrl: './new-item-page.component.html',
  styleUrls: ['./new-item-page.component.css']
})
export class NewItemPageComponent implements OnInit {

  public config: any= {
    'title':'Adicionar Item',
    'type':'new_page'
  }

  public form: FormGroup;
  @Output() responseEmitter = new EventEmitter();

  constructor(
    private createItem: CreateItem,
    private listItem: ListItem,
    private fb: FormBuilder,
    private router: Router
    ) {
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
    if(data){
      this.responseEmitter.emit(this.getList());
      this.router.navigate(['/']);
    }
  }
  
  getList(){
    return this.listItem.execute();
  }
}
