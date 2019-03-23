import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  setHours: number;
  setMinutes: number;
  setSeconds: number;
  startMessage: string;
  showBoxForm: boolean;
  showBoxCounter: boolean;
  showGobackButton: boolean;
  deactivateBtn: boolean;
  msgActiveBtn: string;
  stopCounter: string;

  constructor() {
    this.setHours = 0;
    this.setMinutes = 0;
    this.setSeconds = 0;
    this.startMessage = 'Set up the time for your bomb';
    this.showBoxForm = true;
    this.showBoxCounter = false;
    this.showGobackButton = false;
    this.msgActiveBtn = 'Activate';
    this.deactivateBtn = true;
    this.stopCounter = '';
  }

  ngOnInit() {
  }

  sumOne(_container: HTMLElement, typeTime: string) {
    const containerText = _container.innerText;
    if (typeTime === 'hours' && this.setHours < 24) {
      this.setHours = this.setHours + 1;
    } else if (typeTime === 'minutes' && this.setMinutes < 59) {
      this.setMinutes = this.setMinutes + 1;
    } else if (typeTime === 'seconds' && this.setSeconds < 59) {
      this.setSeconds = this.setSeconds + 1;
    }
    this.checkActivateBtn();
  }

  restOne(_container: HTMLElement, typeTime: string) {
    const containerText = _container.innerText;
    if (typeTime === 'hours' && this.setHours > 0) {
      this.setHours = this.setHours - 1;
    } else if (typeTime === 'minutes' && this.setMinutes > 0) {
      this.setMinutes = this.setMinutes - 1;
    } else if (typeTime === 'seconds' && this.setSeconds > 0) {
      this.setSeconds = this.setSeconds - 1;
    }
    this.checkActivateBtn();
  }

  activateBomb() {
    this.showBoxForm = false;
    this.showBoxCounter = true;
    this.showGobackButton = true;
  }

  checkActivateBtn() {
    if (this.setHours !== 0 || this.setMinutes !== 0 || this.setSeconds !== 0) {
      this.deactivateBtn = false;
    } else {
      this.deactivateBtn = true;
    }
  }

  receiveMessage($event) {
    this.stopCounter = $event;
    this.showBoxForm = true;
    this.showBoxCounter = false;
    this.deactivateBtn = true;
    this.setHours = 0;
    this.setMinutes = 0;
    this.setSeconds = 0;
  }

}
