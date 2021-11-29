import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwtaStopsComponent } from './pwta-stops.component';

describe('PwtaStopsComponent', () => {
  let component: PwtaStopsComponent;
  let fixture: ComponentFixture<PwtaStopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwtaStopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwtaStopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
