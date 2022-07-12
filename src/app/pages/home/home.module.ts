import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { FormularioComponent } from './components/formulario/formulario.component';




@NgModule({
  declarations: [
    HomeContainerComponent,
    FormularioComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule     
  ]
})
export class HomeModule { }
