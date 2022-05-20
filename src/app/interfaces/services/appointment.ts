import { Observable } from 'rxjs';
import { IAppointment } from '../appointments';

/*
technicly not a "real" Interface we use it as an in
between layer according to DDD /hexagonal architecture
*/
export abstract class IApointmentService {
  public abstract getAppointments(): Observable<IAppointment[]>;

  public abstract getAppointment(id: string): Observable<IAppointment>;

  public abstract createAppointment(appointment: IAppointment): Observable<IAppointment>;

  public abstract updateAppointment(appointment: IAppointment): Observable<IAppointment>;

  public abstract deleteAppointment(id: string): Observable<IAppointment>;
}
