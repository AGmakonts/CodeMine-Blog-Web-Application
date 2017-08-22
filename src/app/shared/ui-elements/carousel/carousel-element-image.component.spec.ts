import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselElementImageComponent } from './carousel-element-image.component';

describe('CarouselElementImageComponent', () => {
  let component: CarouselElementImageComponent;
  let fixture: ComponentFixture<CarouselElementImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselElementImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselElementImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});