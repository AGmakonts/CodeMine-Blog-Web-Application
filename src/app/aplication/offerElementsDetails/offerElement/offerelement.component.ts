import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocalizeRouterService} from 'localize-router';
import {OfferElement} from '../interface/offerElement.interface';
import {PreviousPositionService} from '../../../shared/services/previous-position.service';

@Component({
  selector: 'app-angular',
  templateUrl: 'offerelement.component.html',
  styleUrls: ['offerelement.component.scss']
})
export class OfferElementComponent implements OnInit {

  @ViewChild('svg') svg;
  @ViewChild('scrollableBox') scrollableBox;
  viewBox = '0 0 128 128';

  offerElement: OfferElement;
  isScrolled = false;


  constructor(private route: ActivatedRoute,
              private previousPositionService: PreviousPositionService,
              private localize: LocalizeRouterService) {
  }

  onScroll() {
    this.checkScrollTop();
  }

  ngOnInit() {
    this.checkScrollTop()
    this.route.data.subscribe(
      (data) => {
        this.offerElement = data['offerelement'];
        this.svg.nativeElement.innerHTML = this.offerElement.icon.svgBody;
        this.viewBox = this.offerElement.icon.viewBox;
      }
    );
  }

  getBackLink() {
    const previousPage = this.previousPositionService.getBackTo();
    return this.localize.translateRoute('/' + previousPage + '/');
  }


  checkScrollTop() {
    this.isScrolled = this.getScrollTop() > 25;
  }


  private getScrollTop() {
    return this.scrollableBox.nativeElement.scrollTop;
  }
}
