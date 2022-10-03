import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'PkmButton',
  templateUrl: './pkm-button.component.html',
  styleUrls: ['./pkm-button.component.css'],
})
export class PkmButtonComponent implements OnInit {
  @Input() type: string = 'secondary';
  constructor() {}

  ngOnInit(): void {}
}
