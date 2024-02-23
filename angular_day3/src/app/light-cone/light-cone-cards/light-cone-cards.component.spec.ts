import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightConeCardsComponent } from './light-cone-cards.component';

describe('LightConeCardsComponent', () => {
  let component: LightConeCardsComponent;
  let fixture: ComponentFixture<LightConeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LightConeCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightConeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
