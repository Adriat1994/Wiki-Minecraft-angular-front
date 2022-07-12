import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiomeRoutingModule } from './biome-routing.module';
import { BiomeContainerComponent } from './component/biome-container/biome-container.component';



@NgModule({
  declarations: [
    BiomeContainerComponent    
  ],
  imports: [
    CommonModule,
    BiomeRoutingModule
  ]
})
export class BiomeModule { }
