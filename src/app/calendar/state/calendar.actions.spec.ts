import * as fromCalendar from './calendar.actions';

describe('loadCalendars', () => {
  it('should return an action', () => {
    expect(fromCalendar.loadAppointments().type).toBe('[Calendar] Load Appointments');
  });
});
