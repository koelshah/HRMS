import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployecomponentComponent } from './employecomponent.component';

describe('EmployecomponentComponent', () => {
  let component: EmployecomponentComponent;
  let fixture: ComponentFixture<EmployecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
