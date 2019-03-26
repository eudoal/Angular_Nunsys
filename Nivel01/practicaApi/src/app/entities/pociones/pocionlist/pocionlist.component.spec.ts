import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocionlistComponent } from './pocionlist.component';

describe('PocionlistComponent', () => {
  let component: PocionlistComponent;
  let fixture: ComponentFixture<PocionlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocionlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
