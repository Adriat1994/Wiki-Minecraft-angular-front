import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'animals', loadChildren: () =>
    import('./pages/animals/animals.module').then(m => m.AnimalsModule)
  },
  {
    path: 'biome', loadChildren: () =>
    import('./pages/biome/biome.module').then(m => m.BiomeModule)
  },
  {
    path: 'home', loadChildren: () =>
    import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'items', loadChildren: () =>
    import('./pages/items/items.module').then(m => m.ItemsModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
