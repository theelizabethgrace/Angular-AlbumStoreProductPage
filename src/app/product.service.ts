import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
Private _albumUrl = "../assets/album.js";
getAlbum(id: number){
  return this._http.get(_albumUrl).map((response)=>
  response.json());
}
  constructor(private _http: Http) { }

}
