import { Component, signal } from '@angular/core';
import { SetColor } from './directives/set-color';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [SetColor, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ejemploDirectiva');
  color = signal('yellow');
}
