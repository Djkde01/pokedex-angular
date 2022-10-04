import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'PkmList',
  templateUrl: './pkm-list.component.html',
  styleUrls: ['./pkm-list.component.css'],
})
export class PkmListComponent implements OnInit {
  @Input() pokemons: Array<Pokemon> = [];
  favList: Set<any> = new Set();
  @Output() favCount = new EventEmitter<number>();

  constructor() {}

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

  ngOnInit(): void {}
}
