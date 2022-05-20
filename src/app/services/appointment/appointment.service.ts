import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MonoTypeOperatorFunction, Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { IAppointment } from 'src/app/interfaces/appointments';
import { IApointmentService } from 'src/app/interfaces/services/appointment';
import { EnvironmentService } from '../environment/environment.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class AppointmentService implements IApointmentService {

  private retrys = 3;

  constructor(private http: HttpClient, private env: EnvironmentService) {}

  getAppointments(): Observable<IAppointment[]> {
    return this.http.get<IAppointment[]>(`${this.env.apiHost}/appointments`).pipe(this.commonOperators());
  }

  getAppointment(id: string): Observable<IAppointment> {
    return this.http.get<IAppointment>(`${this.env.apiHost}/appointments/${id}`).pipe(this.commonOperators());
  }

  createAppointment(memo: any): Observable<IAppointment> {
    return this.http.post<IAppointment>(`${this.env.apiHost}/appointments`, memo, httpOptions).pipe(this.commonOperators());
  }

  updateAppointment(memo: IAppointment): Observable<IAppointment> {
    return this.http.put<IAppointment>(`${this.env.apiHost}/appointments`, memo, httpOptions).pipe(this.commonOperators());
  }

  deleteAppointment(id: string): Observable<IAppointment> {
    return this.http.delete<IAppointment>(`${this.env.apiHost}/appointments/${id}`, httpOptions);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(`Error: ${error.statusText}, please try again later`);
  }
  //TODO: Research ways to get rid of any
  /**
   * collection of rxjs operators
   * @returns rxjs operators in common inside this service
   */
  private commonOperators(): any {
    return retry(this.retrys), catchError((error) => this.handleError(error))
  }
}
