import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'my-posts-app';
  ngOnInit(): void {
    window.addEventListener('keyup', (e) => {
      if (e.key === 'PrintScreen') {
        alert("Don't take a screenshot!");
        navigator.clipboard.writeText('');
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
