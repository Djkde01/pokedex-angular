import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'PkmTopBar',
  templateUrl: './pkm-top-bar.component.html',
  styleUrls: ['./pkm-top-bar.component.css'],
})
export class PkmTopBarComponent implements OnInit {
  logo: string = '/assets/logo.svg';
  @Input() favCount: number = 0;

  ngOnInit(): void {}
}
