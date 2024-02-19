import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwratStartComponent } from './dwrat-start.component';

describe('DwratStartComponent', () => {
  let component: DwratStartComponent;
  let fixture: ComponentFixture<DwratStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DwratStartComponent]
    });
    fixture = TestBed.createComponent(DwratStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
