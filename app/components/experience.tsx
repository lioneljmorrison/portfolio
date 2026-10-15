'use client';
import { format } from 'date-fns';
import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { Job } from '../interfaces';
import SectionHeader from './section-header';

export default function Experience({ anchor, jobs }: { anchor: string; jobs: Job[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function formatDate(date: string | undefined): string {
    if (date) {
      return format(new Date(date), 'LLL yyyy');
    }

    return 'Present';
  }

  function select(idx: number) {
    setActive(idx);
    tabRefs.current[idx]?.focus();
  }

  // WAI-ARIA tabs pattern: arrows move and activate, Home/End jump, focus wraps
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, idx: number) {
    const last = jobs.length - 1;
    const moves: Record<string, number> = {
      ArrowDown: idx === last ? 0 : idx + 1,
      ArrowRight: idx === last ? 0 : idx + 1,
      ArrowUp: idx === 0 ? last : idx - 1,
      ArrowLeft: idx === 0 ? last : idx - 1,
      Home: 0,
      End: last,
    };
    const next = moves[event.key];

    if (next === undefined) {
      return;
    }

    event.preventDefault();
    select(next);
  }

  const job = jobs[active];

  return (
    <section id={anchor} className="section">
      <SectionHeader title="Experience"></SectionHeader>
      <div className="exp-layout">
        {/* aria-orientation is left at its tablist default (horizontal) on purpose: the list is vertical only
            from 40rem up, CSS cannot change an attribute, and all four arrow keys work in either layout. */}
        <div role="tablist" aria-label="Companies" className="exp-tabs">
          {jobs.map((j: Job, idx: number) => (
            <button
              key={j.id}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              type="button"
              role="tab"
              id={`exp-tab-${idx}`}
              aria-selected={active === idx}
              aria-controls="exp-panel"
              tabIndex={active === idx ? 0 : -1}
              className="exp-tab"
              onClick={() => setActive(idx)}
              onKeyDown={(e) => onKeyDown(e, idx)}
            >
              {j.company}
            </button>
          ))}
        </div>
        <div role="tabpanel" id="exp-panel" aria-labelledby={`exp-tab-${active}`} className="exp-panel">
          <h3 className="h5 exp-title">{job.title}</h3>
          <p className="meta-text exp-dates">
            {format(new Date(job.dates.start), 'LLL yyyy')} - {formatDate(job.dates?.end)}
          </p>
          {job.tldr && <p>{job.tldr}</p>}
          {job.highlights && job.highlights.length > 0 && (
            <ul className="p-sm exp-highlights">
              {job.highlights.map((bullet: string, idx: number) => (
                <li key={`b-${idx}`}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
