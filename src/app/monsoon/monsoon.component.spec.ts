import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsoonComponent } from './monsoon.component';

describe('MonsoonComponent', () => {
  let component: MonsoonComponent;
  let fixture: ComponentFixture<MonsoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
