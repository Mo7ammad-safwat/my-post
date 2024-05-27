import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  private overlay: HTMLElement;

  constructor() {
    this.overlay = document.createElement('div');
    this.overlay.style.position = 'fixed';
    this.overlay.style.top = '0';
    this.overlay.style.left = '0';
    this.overlay.style.width = '100%';
    this.overlay.style.height = '100%';
    this.overlay.style.backgroundColor = 'black';
    this.overlay.style.zIndex = '10000';
    this.overlay.style.display = 'none';
    document.body.appendChild(this.overlay);
  }

  showOverlay() {
    this.overlay.style.display = 'block';
  }

  hideOverlay() {
    this.overlay.style.display = 'none';
  }
}
