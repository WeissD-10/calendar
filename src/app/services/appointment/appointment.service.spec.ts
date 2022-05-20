import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { IEnvironment } from 'src/app/interfaces/environment';
import { EnvironmentService } from '../environment/environment.service';
import { AppointmentService } from './appointment.service';

describe('AppointmentService', () => {
  let service: AppointmentService;

  const mockEnvironment: IEnvironment = {
    apiHost: 'http://test',
    production: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AppointmentService,
        {provide: HttpClientTestingModule, useValue: { get: (endpoint: any) => of()} },
        { provide: EnvironmentService, useValue: mockEnvironment }
      ]
    });
    service = TestBed.inject(AppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should call the HttpClient with the corrent endpoint", () => {
    const getSpy = spyOn(TestBed.inject(HttpClient), "get").and.returnValue(of());
    service.getAppointments();
    expect(getSpy).toHaveBeenCalledWith(`${mockEnvironment.apiHost}/appointments`)
  });
});
