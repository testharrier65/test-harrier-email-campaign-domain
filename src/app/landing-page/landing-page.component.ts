import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderLanding2Component } from './sections/header-landing-2/header-landing-2.component';
import { HeroSection2Component } from './sections/hero-section-2/hero-section-2.component';
import { WhyUseSectionComponent } from './sections/why-use-section/why-use-section.component';
import { QuestionCoverageSectionComponent } from './sections/question-coverage-section/question-coverage-section.component';
import { FinalCta2Component } from './sections/final-cta-2/final-cta-2.component';
import { FooterLanding2Component } from './sections/footer-landing-2/footer-landing-2.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderLanding2Component,
    HeroSection2Component,
    WhyUseSectionComponent,
    QuestionCoverageSectionComponent,
    FinalCta2Component,
    FooterLanding2Component,
  ],
  templateUrl: './landing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block min-h-screen w-full bg-background-light dark:bg-background-dark',
    '[attr.data-landing-page]': 'true',
  },
})
export class LandingPageComponent {}
