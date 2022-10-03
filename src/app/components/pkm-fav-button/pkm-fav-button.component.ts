import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'PkmFavButton',
  templateUrl: './pkm-fav-button.component.html',
  styleUrls: ['./pkm-fav-button.component.css'],
})
export class PkmFavButtonComponent implements OnInit {
  @Input() checked: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
