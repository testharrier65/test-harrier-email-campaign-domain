import { environment } from 'environments';

function originBase(): string {
  return environment.productSiteOrigin.replace(/\/$/, '');
}

/** Absolute URL on the main TestHarrier site. */
export function productUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${originBase()}${p}`;
}

/** Prebuilt links for templates (standalone campaign site has no in-app routes to these paths). */
export const PRODUCT_LINKS = {
  home: productUrl('/'),
  studentHome: productUrl('/student/home'),
  pricing: productUrl('/pricing'),
  legalPrivacy: productUrl('/legal/privacy-policy'),
  legalTerms: productUrl('/legal/terms'),
  legalContact: productUrl('/legal/contact-us'),
  accountContact: productUrl('/account/contact-us'),
} as const;

/** Opens student test-details on the main app with an access code. */
export function productTestDetailsUrl(code: string): string {
  return productUrl(`/test-details?code=${encodeURIComponent(code)}`);
}
