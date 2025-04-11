import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  counter = 0;
  counterSignal = signal(0);

  increment(value: number) {
    this.counter += value;
  }

  decrement() {
    this.counter -= 1;
  }

  reset() {
    this.counter = 0;
  }

  incrementSignal(value: number) {
    this.counterSignal.update((prev) => prev + value);
  }

  decrementSignal() {
    this.counterSignal.update((prev) => prev - 1);
  }

  resetSignal() {
    this.counterSignal.set(0);
  }
}
