import {Component, Input, OnChanges, HostBinding, Output, EventEmitter} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {Portfolio} from '../../../../aplication/portfolio/interfaces/portfolio.interface';

@Component({
  selector: 'app-carousel-element',
  templateUrl: 'carousel-elementcomponent.html',
  styleUrls: ['carousel-element.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state('left', style({left: '-100%'})),
      state('right', style({left: '100%'})),
      transition('* => leftVisible', [
        style({left: '-100%'}),
        animate('.5s', style({'left': '0'}))
      ]),
      transition('* => rightVisible', [
        style({left: '100%'}),
        animate('.5s', style({'left': '0'}))
      ]),
      transition('* => right', [
        style({left: '0'}),
        animate('.5s')
      ]),
      transition('* => left', [
        style({left: '0'}),
        animate('.5s')
      ])
    ])
  ]
})
export class CarouselElementComponent implements OnChanges {
  @Input() index: number;
  @Input() open: number;
  @Input() project: Portfolio;
  @Input() direction: string;
  @Input() disabledNavigation: boolean;

  @Output() navigate = new EventEmitter();

  @HostBinding('class.center') center;
  animate = 'left';

  ngOnChanges() {
    if (this.index === this.open) {
      this.center = true;
      if (this.direction === 'next') {
        this.animate = 'rightVisible';
      } else {
        this.animate = 'leftVisible';
      }
    } else {
      this.center = false;
      if (this.direction === 'next') {
        this.animate = 'left';
      } else {
        this.animate = 'right';
      }
    }
  }

  onNavigate() {
    const projectUrl = '/portfolio/' + this.project.link;
    this.navigate.emit(projectUrl);
  }

}
