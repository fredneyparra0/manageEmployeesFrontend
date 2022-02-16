import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCheckedComponent } from './input-checked.component';

describe('InputCheckedComponent', () => {
  let component: InputCheckedComponent;
  let fixture: ComponentFixture<InputCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCheckedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
