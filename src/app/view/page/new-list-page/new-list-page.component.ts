import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateList } from 'src/app/feature/list/domain/use_case/CreateList';

@Component({
  selector: 'app-new-list-page',
  templateUrl: './new-list-page.component.html',
  styleUrls: ['./new-list-page.component.css']
})
export class NewListPageComponent implements OnInit {

  public form: FormGroup;

  public config: any= {
    'title':'Adicionar Lista',
    'type':'new_list_page'
  }

  constructor(
    private createList: CreateList,
    private router: Router,
    private fb:FormBuilder
  ) { 
    this.form = this.fb.group({
      title: ['',Validators.required],

    });
  }

  ngOnInit(): void {
    
  }

  async createNewList(){
    let list = await this.createList.execute(this.form.value);
    list.subscribe((data)=> {
      this.router.navigate(['/']);
    },(error) =>{
      this.router.navigate(['/']);
    })
  }

}
