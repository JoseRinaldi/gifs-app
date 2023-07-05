import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './gifs-home-page.component.html',
})
export class GifsHomeComponent {

  constructor(private gifsSrevice : GifsService) {}

  get gifs() : Gif[] {
    return this.gifsSrevice.gifList;
  }

}
