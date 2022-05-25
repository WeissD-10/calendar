import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IAppointment } from 'src/app/interfaces/appointments';

enum appointmentModalEnum {
  next,
  previous
}


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  @Input()
  appointments = new Array<IAppointment>();
  @Input()
  currentAppointment!: IAppointment;

  public modalEnum =  appointmentModalEnum;


  public currentIndex!: number;

  // last index of appointments
  public appMaxInd!: number;

  public last!: boolean;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.currentIndex = this.appointments.indexOf(this.currentAppointment);
    this.appMaxInd = this.appointments.length - 1;
  }

  nextAppointment(action: number) {
    if(action === appointmentModalEnum.next) {
      this.changeCurrentAppointment(this.currentIndex + 1);
    } else {
      this.changeCurrentAppointment(this.currentIndex - 1);
    }
  }

  changeCurrentAppointment(index: number) {
    this.currentIndex = index;
    this.currentAppointment = this.appointments[index];
  }
}
