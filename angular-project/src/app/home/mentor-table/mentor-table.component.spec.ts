import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorTableComponent } from './mentor-table.component';

describe('MentorTableComponent', () => {
  let component: MentorTableComponent;
  let fixture: ComponentFixture<MentorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MentorTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
