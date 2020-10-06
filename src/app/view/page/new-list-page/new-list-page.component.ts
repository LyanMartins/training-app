import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-list-page',
  templateUrl: './new-list-page.component.html',
  styleUrls: ['./new-list-page.component.css']
})
export class NewListPageComponent implements OnInit {

  public config: any= {
    'title':'Adicionar Lista',
    'type':'new_list_page'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
