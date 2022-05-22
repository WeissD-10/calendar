import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventDataMapper } from '../components/mappers';
import * as fromCalendar from './calendar.reducer';

export const selectCalendarState = createFeatureSelector<fromCalendar.CalendarState>(
  fromCalendar.calendarFeatureKey
);

export const selectAppointments = createSelector(
  selectCalendarState, (state) => state?.appointments
);

export const selectCalendarEvents = createSelector(
  selectAppointments, (appointments) => {
    if(appointments) {
      return eventDataMapper(appointments)
    }
    return [];
  }
);
