import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBeforloginComponent } from './home-beforlogin.component';

describe('AfterLoginComponent', () => {
  let component: HomeBeforloginComponent;
  let fixture: ComponentFixture<HomeBeforloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBeforloginComponent]
    });
    fixture = TestBed.createComponent(HomeBeforloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
