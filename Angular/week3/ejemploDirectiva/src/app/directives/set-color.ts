import { Directive, effect, ElementRef, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[setColor]',
  host: {
    '[style.backgroundColor]': 'color()',
    '[style.color]': "textColor()",
    '(click)': 'toggleTextColor()',
  }
})
export class SetColor {
  /* color = input.required<string>({alias: 'setColor'});
  elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    effect(() => this.elementRef.nativeElement.style.backgroundColor = this.color());
  } */
 color = input.required<string>({alias: 'setColor'});
 textColor = signal('black');

  toggleTextColor() {
    this.textColor.update(c => c === 'black' ? 'white' : 'black');
  }
}
