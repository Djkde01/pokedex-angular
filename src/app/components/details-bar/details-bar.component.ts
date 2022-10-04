import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'DetailsBar',
  templateUrl: './details-bar.component.html',
  styleUrls: ['./details-bar.component.css'],
})
export class DetailsBarComponent implements OnInit {
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}
}
