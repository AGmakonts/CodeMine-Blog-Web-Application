import { Component, OnInit, HostListener } from '@angular/core';
import {Company} from '../../shared/interface/company.interface';
import {ActivatedRoute, Data} from '@angular/router';
import {fadeInAnimation} from "../../shared/routing.animation";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations:[fadeInAnimation],
  host:{ '[@fadeInAnimation]': '' }
})
export class AboutUsComponent implements OnInit {

  private breakPoint = 800;
  private modelVisible = false;


  @HostListener('window:resize', ['$event']) onWindowResize(){
    this.checkSize();
  }

  company: Company;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.company = data['company'];
      });
    this.checkSize();
  }

  checkSize(){
     this.modelVisible = window.innerWidth > this.breakPoint;
  }

}
