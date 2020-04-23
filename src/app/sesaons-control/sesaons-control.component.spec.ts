import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesaonsControlComponent } from './sesaons-control.component';

describe('SesaonsControlComponent', () => {
  let component: SesaonsControlComponent;
  let fixture: ComponentFixture<SesaonsControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesaonsControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesaonsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
