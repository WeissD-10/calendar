import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppointment } from '../appointments';

/*
technicly not a "real" Interface we use it as an in
between layer according to DDD /hexagonal architecture
*/
@Injectable()
export abstract class IAppointmentService {
  /**
   * loads all appoitments
   */
  public abstract getAppointments(): Observable<IAppointment[]>;
}
