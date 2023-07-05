import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SerarchResponse } from '../interfaces/gifs.interfaces';
import { compileNgModule } from '@angular/compiler';

const GIPHY_API_KEY = 'DsXwu61TwdrV5sFBPNBkand5JApCqvI1'

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList : Gif[]=[]

  private _tagHistory : string[] = []
  private serviceUrl : string = 'https://api.giphy.com/v1/gifs'

  constructor(private http : HttpClient) {
    this.loadLocalStorage();
   }

  get tagsHistory(){

    return [...this._tagHistory];

  }

  private organizationTags(tag : string){

    tag = tag.toLowerCase();

    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag)
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0,10);
    this.saveLocalStorage();


  }

  private saveLocalStorage() : void{

    localStorage.setItem('History', JSON.stringify(this._tagHistory));

  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('History')) return;

    this._tagHistory = JSON.parse(localStorage.getItem('History')!);

    if(this._tagHistory.length === 0) return;

    this.searchTag(this._tagHistory[0]);

  }

  searchTag(tag:string) : void{

    if(tag.length === 0) return;
    this.organizationTags(tag);

    const params = new HttpParams()
    .set('api_key', GIPHY_API_KEY)
    .set('limit','10')
    .set('q',tag)

    this.http.get<SerarchResponse>(`${ this.serviceUrl }/search?${ params }`)
    .subscribe(resp =>{
      //console.log(resp)
      this.gifList = resp.data;

      console.log({gifs: this.gifList});

    });

    // this._tagHistory.unshift(tag);

  }

}
