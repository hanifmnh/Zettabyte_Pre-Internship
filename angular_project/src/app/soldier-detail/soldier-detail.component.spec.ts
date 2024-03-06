import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldierDetailComponent } from './soldier-detail.component';

describe('SoldierDetailComponent', () => {
  let component: SoldierDetailComponent;
  let fixture: ComponentFixture<SoldierDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoldierDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoldierDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
