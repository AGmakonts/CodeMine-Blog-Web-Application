import {Component, OnInit, HostListener, Input} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LocalizeRouterService} from 'localize-router';


@Component({
  selector: 'app-navigation',
  template: `
    <app-full-size *ngIf="!mobile"
      [navigation]="navigation"
      (changeLanguage)="changeLanguage($event)"
      [HiddenBG]="HiddenBG"></app-full-size>
    <app-hamburger *ngIf="mobile"
      [navigation]="navigation"
      (changeLanguage)="changeLanguage($event)"
      [HiddenBG]="HiddenBG"></app-hamburger>
  `,
  styles: [`
    :host{
      width:85%;
    }
  `]
})
export class NavigationComponent implements OnInit {

  @Input() HiddenBG;
  mobile = false;

  navigation = [
    {
      'title': 'NAVIGATION.home',
      'href': 'home',
      'mobile': true
    },
    {
      'title': 'NAVIGATION.about_as',
      'href': 'aboutus'
    },
    {
      'title': 'NAVIGATION.portfolio',
      'href': 'portfolio'
    },
    {
      'title': 'NAVIGATION.offer',
      'href': 'offer'
    },
    {
      'title': 'NAVIGATION.audit',
      'href': 'audit'
    },
    {
      'title': 'NAVIGATION.contact',
      'href': 'contact'
    }
  ];

  constructor(private localize: LocalizeRouterService, private translate: TranslateService) {
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.checkSize();
  }

  ngOnInit() {
    this.checkSize();
  }

  changeLanguage(lang: string) {
    event.preventDefault();
    this.localize.changeLanguage(lang);
    this.translate.use(lang);
  }


  checkSize() {
    this.mobile = window.innerWidth < 768;
  }
}
