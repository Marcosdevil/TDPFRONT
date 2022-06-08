import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtModo3Component } from './bt-modo3.component';

describe('BtModo3Component', () => {
  let component: BtModo3Component;
  let fixture: ComponentFixture<BtModo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtModo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtModo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
