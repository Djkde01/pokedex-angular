import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'PkmList',
  templateUrl: './pkm-list.component.html',
  styleUrls: ['./pkm-list.component.css'],
})
export class PkmListComponent implements OnInit {
  @Input() pokemons: Array<Pokemon> = [];
  @Output() favCount: EventEmitter<number> = new EventEmitter<number>();
  @Output() onFavAdd: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  saveFavList(pokemon: Pokemon) {
    const currentFavArray = JSON.parse(localStorage.getItem('favList') || '[]');

    const newFavArray = currentFavArray.filter(
      (favElement: Pokemon) =>
        JSON.stringify(favElement) !== JSON.stringify(pokemon)
    );

    if (currentFavArray.length === newFavArray.length) {
      newFavArray.push(pokemon);
    }
    localStorage.setItem('favList', JSON.stringify(newFavArray));
    this.emitEvents();
  }

  emitEvents() {
    this.favCount.emit(
      JSON.parse(localStorage.getItem('favList') || '[]').length
    );
    this.onFavAdd.emit();
  }

  ngOnInit(): void {}
}
