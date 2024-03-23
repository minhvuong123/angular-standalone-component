import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';

@Component({
  standalone: true,
  imports: [DetailsComponent],
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  title = 'angular-standalone-component';
}
