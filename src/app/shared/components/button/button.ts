import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class ButtonComponent {
  @Input() href = '';
  @Input() text = 'Click me';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() target = '';
  @Input() rel = '';
  // If href is empty, the button will render in a disabled style
  get disabled() {
    return !this.href;
  }
}
