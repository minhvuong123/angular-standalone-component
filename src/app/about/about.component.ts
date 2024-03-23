import { Component } from '@angular/core';
import { HighlightDirective } from '../shared/hightlight.directive';

@Component({
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
