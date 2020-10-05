import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemComponent } from './view/components/list-item/list-item.component';
import { NewItemComponent } from './view/components/new-item/new-item.component';
import { ListPageComponent } from './view/page/list-page/list-page.component';
import { NewItemPageComponent } from './view/page/new-item-page/new-item-page.component';

const routes: Routes = [ 
  { path: '', component: ListPageComponent, data: {animation: 'isLeft'} },
  { path: 'create', component: NewItemPageComponent, data: {animation: 'isRight'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
