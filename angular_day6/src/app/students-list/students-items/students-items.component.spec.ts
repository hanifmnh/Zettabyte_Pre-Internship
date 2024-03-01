import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsItemsComponent } from './students-items.component';

describe('StudentsItemsComponent', () => {
  let component: StudentsItemsComponent;
  let fixture: ComponentFixture<StudentsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
