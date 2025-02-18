import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [WelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-standalone-component';
}
