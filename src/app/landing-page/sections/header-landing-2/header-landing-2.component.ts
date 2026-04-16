import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PRODUCT_LINKS } from '../../../product-site-links';

@Component({
  selector: 'app-header-landing-2',
  standalone: true,
  templateUrl: './header-landing-2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLanding2Component {
  private readonly document = inject(DOCUMENT);

  readonly links = PRODUCT_LINKS;

  scrollToSection(anchor: string): void {
    const el = this.document.getElementById(anchor);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
