import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'PkmList',
  templateUrl: './pkm-list.component.html',
  styleUrls: ['./pkm-list.component.css'],
})
export class PkmListComponent implements OnInit {
  pokemons: any[] = [];
  favList: Set<any> = new Set();
  @Output() favCount = new EventEmitter<number>();

  constructor(private dataService: DataService) {}

  saveFavList(pokemon: any) {
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
