const STORAGE_KEY = "sesajans-cookie-consent";
const CONSENT_EVENT = "sesajans-consent-change";

export function getCookieConsent(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_KEY);
}

export function isCookieConsentAccepted(): boolean {
  return getCookieConsent() === "accepted";
}

export function setCookieConsent(value: "accepted" | "rejected") {
  localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function subscribeCookieConsent(onChange: () => void) {
  const handler = () => onChange();
  window.addEventListener("storage", handler);
  window.addEventListener(CONSENT_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(CONSENT_EVENT, handler);
  };
}
