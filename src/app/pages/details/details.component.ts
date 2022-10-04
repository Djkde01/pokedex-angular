import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Pokemon } from 'src/app/model/pokemon';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  pokemonName: string | null = null;
  pokemonData: Array<Pokemon> = [];
  speciesData: any = [];

  favList: Set<any> = new Set();
  @Output() favCount = new EventEmitter<number>();

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

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
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.pokemonName = params.get('name');
          if (this.pokemonName) {
            return this.dataService.getPokemonDetails(this.pokemonName);
          }
          return [];
        })
      )
      .subscribe((data: any) => {
        if (data !== 'Not found') {
          this.pokemonData = [data];
        }
      });

    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.pokemonName = params.get('name');
          if (this.pokemonName) {
            return this.dataService.getSpeciesDetails(this.pokemonName);
          }
          return [];
        })
      )
      .subscribe((data: any) => {
        this.speciesData = data.flavor_text_entries.filter(
          (species: any) => species.language.name === 'es'
        );
        console.log(this.speciesData);
      });
  }
}
