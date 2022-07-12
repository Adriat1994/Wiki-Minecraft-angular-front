import { ItemInterface } from './../../../items/component/items-container/models/interface.request.item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'https://shielded-reef-53690.herokuapp.com/';

const itemUrl = baseUrl + 'items';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }



}
