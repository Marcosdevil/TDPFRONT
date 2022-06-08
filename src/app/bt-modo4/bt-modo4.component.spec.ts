import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtModo4Component } from './bt-modo4.component';

describe('BtModo4Component', () => {
  let component: BtModo4Component;
  let fixture: ComponentFixture<BtModo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtModo4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtModo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
