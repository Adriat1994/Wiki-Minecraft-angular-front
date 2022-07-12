import { RequestAnimalsService } from './services/request-animals.service';
import { AnimalInterface } from './models/interface.request.animal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals-container',
  templateUrl: './animals-container.component.html',
  styleUrls: ['./animals-container.component.css']
})
export class AnimalsContainerComponent implements OnInit {

  animalList: AnimalInterface[] = [];

  constructor(private requestAnimalsService: RequestAnimalsService) { }

  //Función que elimina un animal por su id
  deleteAnimalById(id:string) {
    console.log("Estoy borrando un animal");
    console.log(id);
    this.requestAnimalsService.deleteAnimalById(id).subscribe();
  }



  ngOnInit() {
    this.requestAnimalsService.getAnimals().subscribe((data:any) => {
      const resultsAnimals: AnimalInterface[] = data;

      const formattedResultsAnimals = resultsAnimals.map(({ _id, name, description, spawning, behavior, image }) => ({
        _id,
        name,
        description,
        spawning,
        behavior,
        image,
      }));
      this.animalList = formattedResultsAnimals;
    })
  }

}
