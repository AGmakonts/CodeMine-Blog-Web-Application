import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-social-service]',
  template: `
    <a href="#"><span (mouseenter)="mouse('enter')" (mouseleave)="mouse('leave')"   [class]="'fa fa-3x fa-'+socialName" aria-hidden="true"></span></a>
  `,
  styles: [`
    :host {
      padding:0 15px;
    }
    a {
        color:#ffffff;
     }
  `]
})
export class SocialServiceComponent  {

  private defaultColor = "#000000"

  @Input('color') color:string;
  @Input('socialName') socialName:string;

  @Output('hoverColor') hoverStream = new EventEmitter();

  constructor() { }

  mouse(state:string){
    let color = state === 'enter' ? this.color : this.defaultColor;
    this.hoverStream.emit(color);
  }
}
