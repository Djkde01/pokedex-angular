import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService) {}

  favCount: number = 0;
  pokemons: Array<Pokemon> = [];
  limit: number = 12;
  offset: number = 0;

  onLoaded(count: number) {
    this.favCount = count;
  }

  ngOnInit(): void {
    this.dataService
      .getAllPokemons(this.limit, this.offset)
      .subscribe((response: any) => {
        response.results.forEach((result: Pokemon) => {
          this.dataService
            .getPokemonDetails(result.name)
            .subscribe((pokemonResponse: any) =>
              this.pokemons.push(pokemonResponse)
            );
        });
      });
  }
}
