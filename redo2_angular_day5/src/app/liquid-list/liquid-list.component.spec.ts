import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidListComponent } from './liquid-list.component';

describe('LiquidListComponent', () => {
  let component: LiquidListComponent;
  let fixture: ComponentFixture<LiquidListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiquidListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiquidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
