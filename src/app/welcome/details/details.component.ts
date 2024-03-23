import { Component } from '@angular/core';
import { AnalyticsService } from '../../shared/analytics.service';
import { SharedModule } from '../../shared/shared.module';
import { HighlightDirective } from '../../shared/hightlight.directive';

@Component({
  standalone: true,
  // imports: [SharedModule],
  imports: [HighlightDirective],
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}
