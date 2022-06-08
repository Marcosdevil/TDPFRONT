import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BezingerTestComponent } from './bezinger-test.component';

describe('BezingerTestComponent', () => {
  let component: BezingerTestComponent;
  let fixture: ComponentFixture<BezingerTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BezingerTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BezingerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
