import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import {Router, NavigationStart, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-loadingbar',
  template: `
    <div [@loading]="state" ></div>
  `,
  styles: [`
    :host{
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:3px;
    }
    div{
      height:3px;
      background-color:#ffdf00;
      width:0;
    }
  `],
  animations: [
    trigger('loading', [
      state('50', style({
        width: '50%'
      })),
      state('100', style({
        width: '0%'
      })),
      transition('100 => 50', [
        animate('1000ms ease-in-out')
      ]),
      transition('50 => 100', [
        animate('1250ms ease-in-out', keyframes([
          style({width: '50%', offset: .0}),
          style({width: '100%', offset: .9}),
          style({width: '0%', offset: 1})
        ]))
      ])
    ])
  ]
})
export class LoadingComponent implements OnInit {

  state = '0';

  constructor(private router: Router) {
    router.events.subscribe((status) => {
      if (status instanceof NavigationStart) {
        this.state = '50';
      } else if (status instanceof NavigationEnd) {
        this.state = '100';
      }
    });
  }


  ngOnInit() {
  }

}
