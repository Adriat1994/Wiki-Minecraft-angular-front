import { AnimalInterface } from './../models/interface.request.animal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'https://shielded-reef-53690.herokuapp.com/';

const animalUrl = baseUrl + 'animals';


@Injectable()

export class RequestAnimalsService {

  constructor(private http:HttpClient) { }

  getAnimals() {
    return this.http.get(animalUrl);
  }

  deleteAnimalById(id: string) {
    console.log(animalUrl + '/' + id);
    return this.http.delete(animalUrl + '/' + id);
  }

  createNewAnimal(datos:AnimalInterface) {    
    return this.http.post(animalUrl + '/' + "create", datos)
  }

}
