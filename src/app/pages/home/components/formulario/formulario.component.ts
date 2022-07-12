import { RequestBiomesService } from './../../../biome/component/biome-container/services/request-biomes.service';
import { RequestAnimalsService } from './../../../animals/components/animals-container/services/request-animals.service';
import { RequestItemsService } from './../../../items/component/items-container/services/request-items.service';
import { ItemInterface } from './../../../items/component/items-container/models/interface.request.item';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  constructor(private requestItemsService: RequestItemsService, private requestAnimalsService: RequestAnimalsService, private requestBiomesService: RequestBiomesService) { }

  

  ngOnInit(): void {
  }

  ItemForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    obtaining: new FormControl(''),
    stack: new FormControl(''),
    image: new FormControl(''),
  });

  createNewItem() {
    console.log("New item created");    
    this.requestItemsService.createNewItem({
      "_id": "",
    "name": this.ItemForm.get('name')!.value,
    "description": this.ItemForm.get('description')!.value,
    "obtaining": this.ItemForm.get('obtaining')!.value,
    "stack": this.ItemForm.get('stack')!.value,
    "image": this.ItemForm.get('image')!.value
  }).subscribe();
  }

  AnimalForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    spawning: new FormControl(''),
    behavior: new FormControl(''),
    image: new FormControl(''),
  });

  createNewAnimal() {
    console.log("New animal created");    
    this.requestAnimalsService.createNewAnimal({
      "_id": "",
    "name": this.AnimalForm.get('name')!.value,
    "description": this.AnimalForm.get('description')!.value,
    "spawning": this.AnimalForm.get('spawning')!.value,
    "behavior": this.AnimalForm.get('behavior')!.value,
    "image": this.AnimalForm.get('image')!.value
  }).subscribe();
  }

  BiomeForm = new FormGroup({
    name: new FormControl(''),
    features: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
  });

  createNewBiome() {
    console.log("New biome created");    
    this.requestBiomesService.createNewBiome({
      "_id": "",
    "name": this.BiomeForm.get('name')!.value,
    "features": this.BiomeForm.get('features')!.value,
    "description": this.BiomeForm.get('description')!.value,
    "image": this.BiomeForm.get('image')!.value
  }).subscribe();
  }

  opcionSeleccionado: string = "item";

  cambiarOpcion() {
    console.log(this.opcionSeleccionado);
  }

  
}


