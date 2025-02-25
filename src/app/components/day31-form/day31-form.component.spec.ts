import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day31FormComponent } from './day31-form.component';

describe('Day31FormComponent', () => {
  let component: Day31FormComponent;
  let fixture: ComponentFixture<Day31FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day31FormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day31FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
