import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
