import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PociondetailComponent } from './pociondetail.component';

describe('PociondetailComponent', () => {
  let component: PociondetailComponent;
  let fixture: ComponentFixture<PociondetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PociondetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PociondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
