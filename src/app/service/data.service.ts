import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  //Get all

  getAllPokemons() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=12');
  }

  getPokemonDetails(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
