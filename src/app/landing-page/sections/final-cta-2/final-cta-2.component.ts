import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PRODUCT_LINKS } from '../../../product-site-links';

@Component({
  selector: 'app-final-cta-2',
  standalone: true,
  templateUrl: './final-cta-2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinalCta2Component {
  readonly links = PRODUCT_LINKS;
}
