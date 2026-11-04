export const DASH_ONBOARDING_URL = "https://dash.heystax.ai/onboarding?source=homepage";

// HeyStax is invite only for now. Every public "start" CTA goes to the beta
// register page. Keep this URL stable: other pages and outreach link to it.
export const DASH_BETA_URL = "https://dash.heystax.ai/beta?source=homepage";

export function dashBetaUrl(source: string) {
  return `https://dash.heystax.ai/beta?source=${encodeURIComponent(source)}`;
}
