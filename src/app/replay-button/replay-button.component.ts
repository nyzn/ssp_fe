import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-replay-button',
  templateUrl: './replay-button.component.html',
  styleUrls: ['./replay-button.component.scss'],
})
export class ReplayButtonComponent {
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  buttonClickHandle() {
    this.clicked.emit();
  }
}
