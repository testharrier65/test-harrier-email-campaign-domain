import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { PRODUCT_LINKS, productTestDetailsUrl } from '../../../product-site-links';

@Component({
  selector: 'app-hero-section-2',
  standalone: true,
  imports: [NgClass],
  templateUrl: './hero-section-2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection2Component {
  readonly links = PRODUCT_LINKS;

  /** Drives primary styling on the field + Join when non-empty. */
  private readonly joinDraft = signal('');
  readonly joinHasText = computed(() => this.joinDraft().length > 0);

  onJoinDraftInput(value: string): void {
    this.joinDraft.set(value);
  }

  /**
   * Opens test details for a pasted access code (e.g. TH-26-T9PE2DFQ) or a URL that contains
   * `?code=` or a path segment with the code — on the main TestHarrier site.
   */
  goJoin(raw: string): void {
    const code = extractTestAccessCode(raw);
    if (!code) return;
    globalThis.location.href = productTestDetailsUrl(code);
  }
}

/** Accepts plain codes, full URLs with `code=`, or paths like `/test-details?code=`. */
function extractTestAccessCode(raw: string): string | null {
  const s = raw.trim();
  if (!s) return null;

  const fromQuery = /(?:^|[?&#])code=([^&\s#]+)/i.exec(s);
  if (fromQuery?.[1]) {
    try {
      return decodeURIComponent(fromQuery[1].trim());
    } catch {
      return fromQuery[1].trim();
    }
  }

  if (/^https?:\/\//i.test(s)) {
    try {
      const u = new URL(s);
      const q = u.searchParams.get('code');
      if (q?.trim()) return q.trim();
      const seg = u.pathname.split('/').filter(Boolean).pop();
      if (seg && isLikelyAccessCode(seg)) return seg;
    } catch {
      /* ignore */
    }
  }

  const plain = s.replace(/^["']|["']$/g, '').trim();
  if (isLikelyAccessCode(plain)) return plain;

  return null;
}

function isLikelyAccessCode(s: string): boolean {
  return /^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$|^[A-Za-z0-9]{3,40}$/.test(s);
}
