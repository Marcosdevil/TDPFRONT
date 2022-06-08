import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtModo2Component } from './bt-modo2.component';

describe('BtModo2Component', () => {
  let component: BtModo2Component;
  let fixture: ComponentFixture<BtModo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtModo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtModo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
