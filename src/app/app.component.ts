import {Component, HostBinding, Inject, ReflectiveInjector} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {trigger, state, transition, style, animate} from '@angular/animations';
import {environment} from '../environments/environment';

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
