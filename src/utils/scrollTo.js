const NAVBAR_OFFSET = 80;

/**
 * Smoothly scrolls to a section by id, offsetting for the sticky navbar height.
 */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}
