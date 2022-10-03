import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'PkmTopBar',
  templateUrl: './pkm-top-bar.component.html',
  styleUrls: ['./pkm-top-bar.component.css'],
})
export class PkmTopBarComponent implements OnInit {
  logo: string = '/assets/logo.svg';
  favCount = localStorage.getItem('favList')?.length;

  constructor() {}

  ngOnInit(): void {}
}
