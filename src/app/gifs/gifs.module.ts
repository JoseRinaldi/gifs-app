import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsHomeComponent } from './pages/gifs-home/gifs-home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    GifsHomeComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsHomeComponent,
    SearchBoxComponent,
    CardListComponent
  ]
})
export class GifsModule { }
