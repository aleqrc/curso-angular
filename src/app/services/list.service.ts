import { Injectable } from '@angular/core';
import { pokemons } from '../pokemons';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(pokemons: pokemons[], pokemon: pokemons) {
    return pokemons.filter((a) => pokemon.nome !== a.nome)
  }
}
