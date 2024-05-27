import { Component, OnInit } from '@angular/core';
import { OverlayService } from './shere/overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private overlayService: OverlayService) {}

  ngOnInit(): void {
    window.addEventListener('keyup', (e) => {
      if (e.key === 'PrintScreen') {
        this.overlayService.showOverlay();
        alert("Don't take a screenshot!");
        navigator.clipboard.writeText('');
        setTimeout(() => this.overlayService.hideOverlay(), 1000); // Hide after 1 second
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'p') {
        alert('Printing is disabled.');
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    });
  }
}
