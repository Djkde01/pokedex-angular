import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'PkmList',
  templateUrl: './pkm-list.component.html',
  styleUrls: ['./pkm-list.component.css'],
})
export class PkmListComponent implements OnInit {
  pokemons: any[] = [];
  favList: Set<any> = new Set();

  constructor(private dataService: DataService) {}

  saveFavList(pokemon: any) {
    if (this.favList.has(pokemon)) {
      this.favList.delete(pokemon);
    } else {
      this.favList.add(pokemon);
    }
    const favArray = Array.from(this.favList);
    localStorage.setItem('favList', JSON.stringify(favArray));
  }

  ngOnInit(): void {
    this.dataService.getAllPokemons().subscribe((response: any) => {
      response.results.forEach((result: any) => {
        this.dataService
          .getPokemonDetails(result.name)
          .subscribe((pokemonResponse: any) =>
            this.pokemons.push(pokemonResponse)
          );
      });
    });
  }
}
