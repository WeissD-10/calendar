import * as fromCalendar from './calendar.reducer';
import { selectCalendarState } from './calendar.selectors';

describe('Calendar Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCalendarState({
      [fromCalendar.calendarFeatureKey]: {...fromCalendar.initialState}
    });
    expect(result).toEqual({...fromCalendar.initialState});
  });
});
