import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazadetailComponent } from './razadetail.component';

describe('RazadetailComponent', () => {
  let component: RazadetailComponent;
  let fixture: ComponentFixture<RazadetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazadetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
