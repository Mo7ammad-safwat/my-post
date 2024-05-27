import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreventCopyPaste]',
})
export class PreventCopyPasteDirective {
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'p') {
      event.preventDefault();
      alert('Printing is disabled.');
    }
  }

  @HostListener('document:keyup', ['$event'])
  handlePrintScreen(event: KeyboardEvent) {
    if (event.key === 'PrintScreen') {
      alert('Screenshots are disabled.');
      navigator.clipboard.writeText('');
    }
  }

  @HostListener('copy', ['$event'])
  handleCopy(event: ClipboardEvent) {
    event.preventDefault();
    alert('Copying text is disabled.');
  }
}
