import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLibComponent } from './input-lib.component';

describe('InputLibComponent', () => {
  let component: InputLibComponent;
  let fixture: ComponentFixture<InputLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
