import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  Input,
  EventEmitter,

} from '@angular/core';
import { Subject } from 'rxjs';
import { NgbDate, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarView,
} from 'angular-calendar';
import { CalendarState } from '../../state/calendar.reducer';
import { Store } from '@ngrx/store';
import { selectAppointments, selectCalendarEvents } from '../../state/calendar.selectors';
import { takeUntil } from 'rxjs/operators';
import { loadAppointments } from '../../state/calendar.actions';

import { IAppointment } from 'src/app/interfaces/appointments';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarWeekComponent implements OnInit, OnDestroy {

  @Input()
  dateInput!: EventEmitter<NgbDate>

  /**
   * sets increment by which the arrows change the date
   */
  public view: CalendarView = CalendarView.Week;

  public dayStartHour = 8;

  public dayEndHour = 19;

  public CalendarView = CalendarView;

  public viewDate: Date = new Date();

  private $destroy = new Subject<void>();

  public $refresh = new Subject<void>();

  public events = new Array<CalendarEvent>();

  private appointments = new Array<IAppointment>();

  constructor(
    private modalService: NgbModal,
    private store: Store<CalendarState>,

    ) {}

  public ngOnInit(): void {
    this.store.dispatch(loadAppointments());
    this.store.select(selectAppointments).pipe(takeUntil(this.$destroy)).subscribe(appointments => {
      this.appointments = appointments;
      this.$refresh.next();
    })
    this.store.select(selectCalendarEvents).pipe(takeUntil(this.$destroy)).subscribe(events => {
      this.events = events;
    });
    this.dateInput.pipe(takeUntil(this.$destroy)).subscribe(e => {
      this.viewDate = new Date(e.year, e.month - 1, e.day);
      this.$refresh.next();
    });
  }

  public ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
  /**
   * opens modal for clicked appointment by id, assumes id is unique
   * @param event singular CalendarEvent from Clickhandler
   */
  public handleEvent(event: CalendarEvent): void {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.appointments = this.appointments;
    modalRef.componentInstance.currentAppointment = this.appointments.find(e => e.id === event.id);
  }
}
