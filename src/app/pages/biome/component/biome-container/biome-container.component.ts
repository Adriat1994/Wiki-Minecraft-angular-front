import { RequestBiomesService } from './services/request-biomes.service';
import { BiomeInterface } from './models/interface.request.biomes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biome-container',
  templateUrl: './biome-container.component.html',
  styleUrls: ['./biome-container.component.css']
})
export class BiomeContainerComponent implements OnInit {

  biomeList: BiomeInterface[] = [];

  constructor(private requestBiomesService: RequestBiomesService) { }

  //Función que elimina un bioma por su id
  deleteBiomeById(id:string) {
    console.log("Estoy borrando un bioma");
    console.log(id);
    this.requestBiomesService.deleteBiomeById(id).subscribe();
  }

  ngOnInit() {
    this.requestBiomesService.getBiomes().subscribe((data:any) => {
      const resultsBiomes: BiomeInterface[] = data;

      const formattedResultsBiomes = resultsBiomes.map(({ _id, name, features, description, image }) => ({
        _id,
        name,
        features,
        description,
        image,
      }));
      this.biomeList = formattedResultsBiomes;
    })
  }

}
