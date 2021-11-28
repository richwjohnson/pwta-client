import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwtaRoutesComponent } from './pwta-routes.component';

describe('PwtaRoutesComponent', () => {
  let component: PwtaRoutesComponent;
  let fixture: ComponentFixture<PwtaRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwtaRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwtaRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
