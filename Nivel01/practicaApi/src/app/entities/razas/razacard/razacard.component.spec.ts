import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazacardComponent } from './razacard.component';

describe('RazacardComponent', () => {
  let component: RazacardComponent;
  let fixture: ComponentFixture<RazacardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazacardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
