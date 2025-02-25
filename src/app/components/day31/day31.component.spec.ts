import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day31Component } from './day31.component';

describe('Day31Component', () => {
  let component: Day31Component;
  let fixture: ComponentFixture<Day31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day31Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
