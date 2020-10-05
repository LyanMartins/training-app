import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/feature/domain/entity/Item';

@Component({
  selector: 'app-total-item',
  templateUrl: './total-item.component.html',
  styleUrls: ['./total-item.component.css']
})
export class TotalItemComponent implements OnInit {

  @Input() item: Item;


  public report: any = {
    'quantity': 0,
    'price': 10
  };

  constructor() { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getReport()
  }

  getReport(){
    this.report.quantity = this.item.quantity;
    this.report.price = this.item.price * this.report.quantity;
  }

}
