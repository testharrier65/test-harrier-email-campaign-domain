import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PRODUCT_LINKS } from '../../../product-site-links';

@Component({
  selector: 'app-question-coverage-section',
  standalone: true,
  templateUrl: './question-coverage-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCoverageSectionComponent {
  readonly links = PRODUCT_LINKS;
}
