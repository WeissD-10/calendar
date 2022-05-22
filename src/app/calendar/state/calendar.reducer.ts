import { Action, createReducer, on } from '@ngrx/store';
import { CalendarEvent } from 'angular-calendar';
import { IAppointment } from 'src/app/interfaces/appointments';
import * as CalendarActions from './calendar.actions';

export const calendarFeatureKey = 'calendar';

export interface CalendarState {
  appointments: IAppointment[];
  events: CalendarEvent[];
  loading: boolean;
}

export const initialState: CalendarState = {
  appointments: new Array<IAppointment>(),
  events: new Array<CalendarEvent>(),
  loading: false
};

export const calendarReducer = createReducer(
  initialState,

  on(CalendarActions.loadAppointments, (state) => {
    return {...state, loading: true}
  }),
  on(CalendarActions.loadAppointmentsSuccess, (state, action) => {
    console.warn('Test');
    return {...state, loading: false, appointments: action.data}
  }),
  on(CalendarActions.loadAppointmentsFailure, (state) => {
    return {...state, loading: false}
  }),
);
