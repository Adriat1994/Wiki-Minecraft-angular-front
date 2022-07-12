import { RequestBiomesService } from './pages/biome/component/biome-container/services/request-biomes.service';
import { RequestAnimalsService } from './pages/animals/components/animals-container/services/request-animals.service';
import { RequestItemsService } from './pages/items/component/items-container/services/request-items.service';

import { CoreModule } from './core/core.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent, 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule   
  ],
  providers: [RequestItemsService, RequestAnimalsService, RequestBiomesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
