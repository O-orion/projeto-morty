import { Component, Input, Output, forwardRef, output } from '@angular/core';
import { FormControl, ReactiveFormsModule, NG_VALUE_ACCESSOR, FormsModule, Validators, AbstractControl, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputFieldComponent,
    multi: true
  }],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})
export class InputFieldComponent implements ControlValueAccessor {
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = '';
  @Input() formControlName: string = '';
  @Input() control!: FormControl

  value: number = 0;
  onChange: any;

  increment(): void {
      this.value++;
      this.onChange(this.value);
  }

  decrement(): void {
      if(this.value > 0) {
          this.value--;
          this.onChange(this.value);
      }
  }

  writeValue(value: number): void {
      if(value < 0) {
          this.value = 0;
      } else {
          this.value = value;
      }
  }

  registerOnChange(fn: any): void {
      this.onChange = fn;
  }

}

