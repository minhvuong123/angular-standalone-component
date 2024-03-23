import { Component } from '@angular/core';
import { HighlightDirective } from '../shared/hightlight.directive';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [HighlightDirective, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
