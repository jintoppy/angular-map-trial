import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPinComponent } from './load-pin.component';

describe('LoadPinComponent', () => {
  let component: LoadPinComponent;
  let fixture: ComponentFixture<LoadPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
