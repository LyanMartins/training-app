import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateItem } from './feature/domain/use_case/CreateItem';
import { ItemRepository } from './feature/data/repository/ItemRepository';
import { ItemService } from './feature/data/data_source/ItemService';
import { ListItem } from './feature/domain/use_case/ListItem';
import { ReactiveFormsModule } from '@angular/forms';
import { ListPageComponent } from './view/page/list-page/list-page.component';
import { NavbarComponent } from './view/components/navbar/navbar.component';
import { NewItemComponent } from './view/components/new-item/new-item.component';
import { TotalItemComponent } from './view/components/total-item/total-item.component';
import { ListItemComponent } from './view/components/list-item/list-item.component';
import { NewItemPageComponent } from './view/page/new-item-page/new-item-page.component';
import { ListItemPageComponent } from './view/page/list-item-page/list-item-page.component';
import { NewListPageComponent } from './view/page/new-list-page/new-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewItemComponent,
    ListItemComponent,
    TotalItemComponent,
    ListPageComponent,
    NewItemPageComponent,
    ListItemPageComponent,
    NewListPageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  // {provide: 'IDadosServiceToken', useClass: DadosSQL}
  providers: [
    ItemRepository, ItemService,
    CreateItem, ListItem
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
