import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HandSign } from 'src/shared/enum/hand-sign';

@Component({
  selector: 'app-hand-option',
  templateUrl: './hand-option.component.html',
  styleUrls: ['./hand-option.component.scss'],
})
export class HandOptionComponent {
  private baseClassName: string = 'hand-option';

  @Input() option: HandSign | undefined;
  @Input() isBig: boolean = false;
  @Output() selected: EventEmitter<HandSign> = new EventEmitter<HandSign>();

  classNames: string = '';
  iconName: string = '';

  constructor() {}

  ngOnInit() {
    this.classNames = this.baseClassName;
    if (this.option !== undefined) {
      const HandSigns = Object.values(HandSign);
      this.iconName = HandSigns[this.option] + '-icon';
      this.classNames = `${this.baseClassName} ${this.baseClassName}--${
        HandSigns[this.option]
      }`;
    }

    if (this.isBig) {
      this.classNames += ` ${this.baseClassName}--big`;
    }
  }

  optionClickHandler() {
    this.selected.emit(this.option);
  }
}
