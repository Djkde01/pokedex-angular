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

  getAllPokemons(limit: number, offset: number) {
    return this.http.get<InitialList[]>(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
  }

  getPokemonDetails(name: string) {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
  getSpeciesDetails(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
  }
}
