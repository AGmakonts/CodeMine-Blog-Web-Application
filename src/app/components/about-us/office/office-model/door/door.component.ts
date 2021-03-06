import {Component, OnInit} from '@angular/core';
import {trigger, state, style} from '@angular/animations'

@Component({
  selector: 'app-door',
  templateUrl: 'door.component.html',
  styleUrls: ['door.component.scss'],
  animations: [
    trigger('door', [
      state('close', style({
        'animation' : 'closeDoor .5s forwards linear'
      })),
      state('open', style({
        'animation' : 'openDoor .5s forwards linear'
      })),


    ])
  ]
})
export class DoorComponent implements OnInit {
  state =  'close';
  constructor() { }

  ngOnInit() {
  }

  openDoor() {
    this.state === 'close' || null ? this.state = 'open' : this.state = 'close';
  }

}
