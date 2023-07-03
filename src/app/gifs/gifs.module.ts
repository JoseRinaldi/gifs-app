import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsHomeComponent } from './pages/gifs-home/gifs-home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    GifsHomeComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsHomeComponent,
    SearchBoxComponent,
  ]
})
export class GifsModule { }
