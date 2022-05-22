import { createAction, props } from '@ngrx/store';
import { IAppointment } from 'src/app/interfaces/appointments';

export const loadAppointments = createAction(
  '[Calendar] Load Appointments'
);

export const loadAppointmentsSuccess = createAction(
  '[Calendar] Load Appointments Success',
  props<{ data:  IAppointment[]}>()
);

export const loadAppointmentsFailure = createAction(
  '[Calendar] Load Appointments Failure',
  props<{ data:  any}>()
);
