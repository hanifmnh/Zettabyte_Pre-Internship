import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidCartComponent } from './liquid-cart.component';

describe('LiquidCartComponent', () => {
  let component: LiquidCartComponent;
  let fixture: ComponentFixture<LiquidCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiquidCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiquidCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
