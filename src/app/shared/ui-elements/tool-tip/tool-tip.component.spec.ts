import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ToolTipComponent} from './tool-tip.component';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../shared.module';

describe('ToolTipComponent', () => {
  let component: ToolTipComponent;
  let fixture: ComponentFixture<ToolTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        SharedModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
