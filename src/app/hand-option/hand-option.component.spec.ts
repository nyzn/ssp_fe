import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandOptionComponent } from './hand-option.component';

describe('HandOptionComponent', () => {
  let component: HandOptionComponent;
  let fixture: ComponentFixture<HandOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandOptionComponent]
    });
    fixture = TestBed.createComponent(HandOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
