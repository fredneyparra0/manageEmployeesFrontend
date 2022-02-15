import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdTableComponent } from './td-table.component';

describe('TdTableComponent', () => {
  let component: TdTableComponent;
  let fixture: ComponentFixture<TdTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
