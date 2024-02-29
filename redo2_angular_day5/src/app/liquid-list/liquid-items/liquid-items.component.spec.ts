import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidItemsComponent } from './liquid-items.component';

describe('LiquidItemsComponent', () => {
  let component: LiquidItemsComponent;
  let fixture: ComponentFixture<LiquidItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiquidItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiquidItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
