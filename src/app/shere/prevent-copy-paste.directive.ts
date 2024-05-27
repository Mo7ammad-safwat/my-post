import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreventCopyPaste]',
})
export class PreventCopyPasteDirective {
  @HostListener('copy', ['$event'])
  handleCopy(event: ClipboardEvent) {
    event.preventDefault();
    alert('Copying text is disabled.');
    console.log('Copying text is not allowed.');
  }

  @HostListener('cut', ['$event'])
  handleCut(event: ClipboardEvent) {
    event.preventDefault();
    alert('Cutting text is disabled.');
    console.log('Cutting text is not allowed.');
  }
}
