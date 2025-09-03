/** Minimal utilities used across the app */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
// Alias used by some components
export const cx = (...parts: Array<string | false | null | undefined>) => cn(...parts);

export const isBrowser = typeof window !== "undefined";
