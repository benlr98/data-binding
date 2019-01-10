import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber: number = 0;

  constructor() { }

  ngOnInit() {
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber = this.lastNumber + 1;
    }, 1000)
  }

  pauseInterval() {
    clearInterval(this.interval);
  }
}
