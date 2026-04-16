import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PRODUCT_LINKS } from '../../../product-site-links';

@Component({
  selector: 'app-footer-landing-2',
  standalone: true,
  templateUrl: './footer-landing-2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterLanding2Component {
  readonly links = PRODUCT_LINKS;
}
