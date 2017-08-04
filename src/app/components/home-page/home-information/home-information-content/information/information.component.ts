import {Component, OnInit, Input, ElementRef,} from '@angular/core';
import {ScrollController} from '../../../services/scroll.controller';
import {ComponentTemplate} from '../component.template';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent extends ComponentTemplate {
  @Input('test') test;

  constructor( scrollController:ScrollController, element:ElementRef) {
    super( scrollController,scrollController.getElementsQuantity()+1, element);
  }

  animateHide(){
    setTimeout( ()=> {
      console.log("animationHide")
    }, 1500 )
  }

  animateShow(cb){
    setTimeout( ()=> {
      console.log("animationShow");
      cb();
    }, 1500 )
  }

}
