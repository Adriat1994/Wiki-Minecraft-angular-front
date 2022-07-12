import { ItemInterface } from './../models/interface.request.item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'https://shielded-reef-53690.herokuapp.com/';

const itemUrl = baseUrl + 'items';


@Injectable()

export class RequestItemsService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(itemUrl);
  }

  deleteItemById(id: string) {
    console.log(itemUrl + '/' + id);
    return this.http.delete(itemUrl + '/' + id);
  }

  createNewItem(datos:ItemInterface) {    
    return this.http.post(itemUrl + '/' + "create", datos)
  }

}


