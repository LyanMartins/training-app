import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() config: any = {
    'title':'Page',
    'type':'type_page'
  }

  @Input() param: number;
  constructor() { }

  ngOnInit(): void {
    console.log(this.config)
  }

}
