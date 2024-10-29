import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomManagementComponent } from './symptom-management.component';

describe('SymptomManagementComponent', () => {
  let component: SymptomManagementComponent;
  let fixture: ComponentFixture<SymptomManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SymptomManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymptomManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
