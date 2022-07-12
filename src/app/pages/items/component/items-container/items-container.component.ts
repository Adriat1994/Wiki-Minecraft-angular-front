import { RequestItemsService } from './services/request-items.service';
import { ItemInterface } from './models/interface.request.item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})
export class ItemsContainerComponent implements OnInit {

  itemList: ItemInterface[] = [];

 


  constructor(private requestItemsService: RequestItemsService) { }

//Función que elimina un item por su id
  deleteItemById(id:string) {
    console.log("Estoy borrando un item");
    console.log(id);
    this.requestItemsService.deleteItemById(id).subscribe();
  }

  ngOnInit() {
    this.requestItemsService.getItems().subscribe((data:any) => {
      console.log(data);
      const results: ItemInterface[] = data;
      

      const formattedResults = results.map(({ _id, name, description, obtaining, stack, image }) => ({
        _id,
        name,
        description,
        obtaining,
        stack,
        image,
      }));
      
      this.itemList = formattedResults;
    });
  }
}
