import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwratSelectionComponent } from './dwrat-selection.component';

describe('DwratSelectionComponent', () => {
  let component: DwratSelectionComponent;
  let fixture: ComponentFixture<DwratSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DwratSelectionComponent]
    });
    fixture = TestBed.createComponent(DwratSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
