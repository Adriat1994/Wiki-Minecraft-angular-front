import { BiomeInterface } from './../models/interface.request.biomes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'https://shielded-reef-53690.herokuapp.com/';

const biomeUrl = baseUrl + 'biomes'



@Injectable()

export class RequestBiomesService {

  constructor(private http: HttpClient) { }

  getBiomes() {
    return this.http.get(biomeUrl);
  }

  deleteBiomeById(id: string) {
    console.log(biomeUrl + '/' + id);
    return this.http.delete(biomeUrl + '/' + id);
  }

  createNewBiome(datos:BiomeInterface) {    
    return this.http.post(biomeUrl + '/' + "create", datos)
  }

}
