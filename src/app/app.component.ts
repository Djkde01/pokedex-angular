import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  favCount: number = 0;

  onLoaded(count: number) {
    this.favCount = count;
  }
}
