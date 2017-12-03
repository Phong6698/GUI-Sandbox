import { Component } from '@angular/core';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  players = [
    {name: 'Player 1'},
    {name: 'Player 2'},
    {name: 'Player 3'},
    {name: 'Player 4'},
    {name: 'Player 5'},
    {name: 'Player 6'},
    {name: 'Player 7'},
  ];
}
