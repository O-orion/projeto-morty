import { Component, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-button-submit',
  standalone: true,
  imports: [],
  templateUrl: './button-submit.component.html',
  styleUrl: './button-submit.component.scss'
})
export class ButtonSubmitComponent {
  @Input() text: string = ''
  submit = output();

  handleClick() {
    this.submit.emit();
  }
}
