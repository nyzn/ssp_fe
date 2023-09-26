import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Winner } from 'src/shared/enum/winner';

@Component({
  selector: 'app-replay-button',
  templateUrl: './replay-button.component.html',
  styleUrls: ['./replay-button.component.scss'],
})
export class ReplayButtonComponent {
  private baseClassName: string = 'replay-button';

  @Input() winner: Winner | undefined;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  classNames: string = this.baseClassName;

  constructor() {}

  ngOnInit() {}

  buttonClickHandle() {
    this.clicked.emit();
  }
}
