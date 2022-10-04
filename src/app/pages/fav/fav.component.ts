import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css'],
})
export class FavComponent implements OnInit {
  favList: Array<Pokemon> = JSON.parse(localStorage.getItem('favList') || '[]');

  constructor() {}

  ngOnInit(): void {}
}
