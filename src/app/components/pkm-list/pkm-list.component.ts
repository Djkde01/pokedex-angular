import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'PkmList',
  templateUrl: './pkm-list.component.html',
  styleUrls: ['./pkm-list.component.css'],
})
export class PkmListComponent implements OnInit {
  pokemons: Array<Pokemon> = [];
  favList: Set<any> = new Set();
  @Output() favCount = new EventEmitter<number>();

  constructor(private dataService: DataService) {}

  saveFavList(pokemon: Pokemon) {
    if (this.favList.has(pokemon)) {
      this.favList.delete(pokemon);
    } else {
      this.favList.add(pokemon);
    }
    const favArray = Array.from(this.favList);
    localStorage.setItem('favList', JSON.stringify(favArray));
    this.favCount.emit(
      JSON.parse(localStorage.getItem('favList') || '{}').length
    );
  }

  ngOnInit(): void {
    this.dataService.getAllPokemons().subscribe((response: any) => {
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
