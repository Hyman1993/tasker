import { Component,  HostBinding } from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {trigger, state, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('square', [
      state('green', style({'background-color': 'green', 'height' : '100px'})),
      state('red', style({'background-color': 'red', 'height' : '50px'})),
      transition('green => red', animate(1000)),
      transition('red => green', animate(1000))
    ])
  ]
})
export class AppComponent {
  title = 'app';
  squareState = true;
  constructor(private oc: OverlayContainer) {

  }

  onClick() {
    this.squareState = !this.squareState;
  }
}
