import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightConeComponent } from './light-cone.component';

describe('LightConeComponent', () => {
  let component: LightConeComponent;
  let fixture: ComponentFixture<LightConeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LightConeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightConeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
