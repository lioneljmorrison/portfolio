'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { NavLinks } from '../interfaces';

export default function MainNav({ data, name }: { data: NavLinks; name: string }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const navItemsArray = Object.entries(data).filter(([, meta]) => meta?.disabled !== true);
  const lastIndex = navItemsArray.length - 1;

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  function scrollTo(id: string) {
    const element = document.getElementById(id);
    setOpen(false);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <header className="site-header">
      <div className="container container-xl header-inner">
        <div className="brand">
          <span>{name}</span>
          <span className="meta-text">Portfolio</span>
        </div>

        <nav className="main-nav" aria-label="Main">
          {navItemsArray.map(([title, meta], index) => (
            <Link
              key={title}
              href={meta.href}
              onClick={() => scrollTo(meta.href.substring(1))}
              target={meta?.target}
              className={index === lastIndex ? 'btn btn-solid btn-sm' : 'nav-item'}
            >
              {title}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          {/* S-10: the theme toggle mounts here */}
          <button
            ref={menuButton}
            type="button"
            className="menu-toggle-btn"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`drawer-overlay${open ? ' is-active' : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <div
        id="mobile-drawer"
        className={`mobile-drawer${open ? ' is-active' : ''}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="drawer-header">
          <div className="brand">
            <span>{name}</span>
          </div>
          <button type="button" className="menu-toggle-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <nav className="drawer-nav" aria-label="Mobile">
          {navItemsArray.map(([title, meta], index) => (
            <Link
              key={title}
              href={meta.href}
              onClick={() => scrollTo(meta.href.substring(1))}
              target={meta?.target}
              className={index === lastIndex ? 'btn btn-solid btn-md' : 'drawer-nav-item'}
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
