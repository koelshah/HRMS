import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploydetailsComponent } from './employdetails.component';

describe('EmploydetailsComponent', () => {
  let component: EmploydetailsComponent;
  let fixture: ComponentFixture<EmploydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
