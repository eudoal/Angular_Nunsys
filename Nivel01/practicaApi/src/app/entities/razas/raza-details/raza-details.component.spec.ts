import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazaDetailsComponent } from './raza-details.component';

describe('RazaDetailsComponent', () => {
  let component: RazaDetailsComponent;
  let fixture: ComponentFixture<RazaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
