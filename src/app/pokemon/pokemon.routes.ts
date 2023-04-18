import { Routes } from "@angular/router";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { AddPokemonComponent } from "./add-pokemon/add-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { AuthGuard } from "../auth.guard";

export const pokemonRoutes: Routes = [
  { 
    path: 'edit/pokemon/:id', 
    canActivate: [AuthGuard], 
    loadComponent: () => import('./edit-pokemon/edit-pokemon.component').then(module => module.EditPokemonComponent) },
  { 
    path: 'pokemon/add', 
    canActivate: [AuthGuard], 
    loadComponent: () => import('./add-pokemon/add-pokemon.component').then(module => module.AddPokemonComponent) 
  },
  { 
    path: 'pokemons', 
    canActivate: [AuthGuard],
    loadComponent: () => import('./list-pokemon/list-pokemon.component').then(module => module.ListPokemonComponent) 
   
  },
  { 
    path: 'pokemon/:id', 
    canActivate: [AuthGuard],
    loadComponent: () => import('./detail-pokemon/detail-pokemon.component').then(module => module.DetailPokemonComponent) 
  }
];