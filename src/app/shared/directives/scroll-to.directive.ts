import {Directive, HostListener, Inject, Input} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import { ScrollToService } from '../services/scroll-to.service';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {
  @Input('appScrollTo') target: any;
  @Input('appScrollToOpponent') opponent:any;

  @HostListener('click') scroll() {
    this.scrollToService.scroll(this.target, this.opponent);
  }

  constructor( private scrollToService:ScrollToService){}

}
