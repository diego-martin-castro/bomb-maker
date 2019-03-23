import { Component, Input, Output, OnInit, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  // Setear tiempo
  @Input() hours: number;
  @Input() minutes: number;
  @Input() seconds: number;

  // Enviar el stop del counter
  @Output() messageEvent = new EventEmitter<string>();

  // Setear contador y mensaje
  showCounter: boolean;
  showMessage: boolean;
  stopCounter: string;
  messageCounter: string;
  messageGoback: string;
  startMessage: string;

  // Setear botones
  showDeactivateButton: boolean;
  showGobackButton: boolean;

  constructor() {
    this.showCounter = false;
    this.showMessage = false;
    this.stopCounter = '';
    this.messageCounter = 'BOOOOOOOOOOOM!';
    this.startMessage = 'The bomb has been planted';
    this.messageGoback = 'Deactivate';
    this.showDeactivateButton = false;
    this.showGobackButton = false;
  }

  ngOnInit() {
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0) {
      this.startCounter();
    }
  }

  startCounter() {
    // Definir horas, minutos y segundos. (usuario)
    const d = new Date();
    let interval;

    d.setHours(this.hours);
    d.setMinutes(this.minutes);
    d.setSeconds(this.seconds);

    // Mostrar contador
    this.showCounter = true;

    // Mostrar deactivate btn
    this.showDeactivateButton = true;

    this.seconds = d.getSeconds();
    this.minutes = d.getMinutes();
    this.hours = d.getHours();

    // Intervalo para comenzar la cuenta regresiva
    interval = setInterval(() => {
      // Comenzar cuenta regresiva restando segundos
      d.setSeconds(d.getSeconds() - 1);
      this.seconds = d.getSeconds();

      // Actualizar el tiempo
      this.seconds = d.getSeconds();
      this.minutes = d.getMinutes();
      this.hours = d.getHours();

      // Verificar si la bomba exploto para mostrar el mensaje y limpiar el interval
      if (this.seconds === 0 && this.minutes === 0 && this.hours === 0) {
        clearInterval(interval);
        this.showCounter = false;
        this.showMessage = true;

        // No mostrar deactivate btn
        // this.showDeactivateButton = false;

        // Mostrar goback btn
        this.messageGoback = 'Finish'; // Mejorar
      }
    }, 1000);  // Cada 1 segundo
  }

  goBack() {
    this.stopCounter = 'R';
    this.messageEvent.emit(this.stopCounter);
  }

}
