import { Component, OnInit } from '@angular/core';
import { pokemons } from 'src/app/pokemons';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']

})
export class ListRenderComponent {
  evolucoes = ''
  animals = [
    { name: "turca", type: "dog" },
    { name: "tom", type: "cat" },
    { name: "frida", type: "dog" },
    { name: "bob", type: "horse" },
  ]
  pokemons: pokemons[] = [

    { nome: "charmander", tipo: "fogo", evolucao: "charmeleon" },
    { nome: "squirtle", tipo: "agua", evolucao: "wartortle" },
    { nome: "bulbasaur", tipo: "planta", evolucao: "ivysaur" },

  ]
  OnInit(): void { }

  constructor(private listService: ListService) { }

  showEvolucao(pokemon: pokemons) {
    this.evolucoes = `o pokemon ${pokemon.nome} evolui para ${pokemon.evolucao}`
  }

  removePokemon(pokemon: pokemons) {
    console.log("removendo pokemon...");
    this.pokemons = this.listService.remove(this.pokemons, pokemon)
  }
}
