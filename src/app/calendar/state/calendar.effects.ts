import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as CalendarActions from './calendar.actions';
import { IAppointmentService } from 'src/app/interfaces/services/appointment';



@Injectable()
export class CalendarEffects {

  loadCalendars$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CalendarActions.loadAppointments),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.appointmentService.getAppointments().pipe(
          map(data => {
            console.warn('appointments', data);
            return CalendarActions.loadAppointmentsSuccess({ data })
          }),
          catchError(error => of (CalendarActions.loadAppointmentsFailure(error)))
      )
    ));
  });



  constructor(private actions$: Actions, private appointmentService: IAppointmentService) {}

}
