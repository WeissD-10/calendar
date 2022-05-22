import { CalendarEvent } from "angular-calendar";
import { IAppointment } from "src/app/interfaces/appointments";

export function eventDataMapper(appointments: IAppointment[]): CalendarEvent[] {
  const result: CalendarEvent[] = new Array<CalendarEvent>();
  appointments.forEach(e =>
    result.push({
      id: e.id,
      start: new Date(e.date),
      title: e.property.name
    }));
  return result;
}
