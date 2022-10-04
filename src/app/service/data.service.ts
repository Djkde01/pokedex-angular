import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InitialList } from '../model/initial-list';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  //Get all

  getAllPokemons() {
    return this.http.get<InitialList[]>(
      'https://pokeapi.co/api/v2/pokemon?limit=12'
    );
  }

  getPokemonDetails(name: string) {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
