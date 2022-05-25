import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { appointmentsMock } from '../mock/appointments.mock';
import { initialState } from '../../state/calendar.reducer';

import { CalendarWeekComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarWeekComponent;
  let fixture: ComponentFixture<CalendarWeekComponent>;

  const mock = appointmentsMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
      ],
      declarations: [ CalendarWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
