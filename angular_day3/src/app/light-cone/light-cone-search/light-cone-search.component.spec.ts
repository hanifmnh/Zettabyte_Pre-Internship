import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightConeSearchComponent } from './light-cone-search.component';

describe('LightConeSearchComponent', () => {
  let component: LightConeSearchComponent;
  let fixture: ComponentFixture<LightConeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LightConeSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightConeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
