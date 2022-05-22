import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CalendarEffects } from '../state/calendar.effects';
import { IAppointmentService } from '../../interfaces/services/appointment';
import { AppointmentService } from '../../services/appointment/appointment.service';
import { calendarFeatureKey, calendarReducer } from '../state/calendar.reducer';
import { NgbCalendar, NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { CalendarWeekComponent } from './calendarweek/calendar.component';
import { CalendarPageComponent } from './calendar.page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CalendarWeekComponent,
    ModalComponent,
    CalendarPageComponent
  ],
  imports: [
    CommonModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    EffectsModule.forRoot([CalendarEffects]),
    StoreModule.forFeature(calendarFeatureKey, calendarReducer),
    NgbModalModule,
    NgbDatepickerModule,
    FormsModule
  ],
  providers: [{ provide: IAppointmentService, useClass: AppointmentService }],
  exports: [CalendarPageComponent]
})
export class AppCalendarModule { }
