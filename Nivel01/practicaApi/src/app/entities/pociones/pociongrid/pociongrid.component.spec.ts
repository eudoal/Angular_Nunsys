import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PociongridComponent } from './pociongrid.component';

describe('PociongridComponent', () => {
  let component: PociongridComponent;
  let fixture: ComponentFixture<PociongridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PociongridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PociongridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
