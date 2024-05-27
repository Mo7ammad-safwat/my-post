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
      alert("Don't take a screenshot!");
      navigator.clipboard.writeText('');
    }
  }

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
