import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidDetailComponent } from './liquid-detail.component';

describe('LiquidDetailComponent', () => {
  let component: LiquidDetailComponent;
  let fixture: ComponentFixture<LiquidDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiquidDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiquidDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
