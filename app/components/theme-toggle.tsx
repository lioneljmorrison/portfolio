'use client';
import { useSyncExternalStore } from 'react';

type Mode = 'light' | 'dark';

const STORAGE_KEY = 'theme-mode';
const QUERY = '(prefers-color-scheme: dark)';

// The mode in effect right now: an explicit data-mode on <html>, else the OS preference.
function getEffectiveMode(): Mode {
  const set = document.documentElement.dataset.mode;
  if (set === 'light' || set === 'dark') return set;
  return window.matchMedia(QUERY).matches ? 'dark' : 'light';
}

const CHANGE_EVENT = 'theme-mode-change';

// Re-read the mode when the toggle is pressed or the OS scheme changes (matters while no choice is stored)
function subscribe(onChange: () => void) {
  const query = window.matchMedia(QUERY);
  query.addEventListener('change', onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    query.removeEventListener('change', onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

export default function ThemeToggle() {
  // null on the server and during hydration, so the server HTML is the same for every visitor
  const mode = useSyncExternalStore<Mode | null>(subscribe, getEffectiveMode, () => null);

  function toggle() {
    const next: Mode = getEffectiveMode() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.mode = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage unavailable: the choice applies for this visit only
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  return (
    <button
      type="button"
      className="theme-toggle-btn"
      aria-label={mode === null ? 'Toggle colour mode' : `Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
      onClick={toggle}
    >
      <svg
        className="theme-icon-sun"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path
          strokeLinecap="round"
          d="M12 3v2M12 19v2M3 12h2M19 12h2M5.64 5.64l1.41 1.41M16.95 16.95l1.41 1.41M5.64 18.36l1.41-1.41M16.95 7.05l1.41-1.41"
        />
      </svg>
      <svg
        className="theme-icon-moon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" />
      </svg>
    </button>
  );
}
