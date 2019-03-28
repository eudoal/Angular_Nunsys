import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocionEditComponent } from './pocion-edit.component';

describe('PocionEditComponent', () => {
  let component: PocionEditComponent;
  let fixture: ComponentFixture<PocionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
