import { appointmentsMock } from '../components/mock/appointments.mock';
import { calendarReducer, initialState } from './calendar.reducer';

describe('Calendar Reducer', () => {
  it('an unknown action should return the previous state', () => {
    const action = {} as any;

    const result = calendarReducer(initialState, action);

    expect(result).toBe(initialState);
  });
  it('should set appointsments from success into state', () => {
    const action = {
      type: '[Calendar] Load Appointments Success', data: appointmentsMock
    };
    const result = calendarReducer(initialState, action);
    expect(result).toEqual({...initialState, appointments: appointmentsMock})
  });
});
