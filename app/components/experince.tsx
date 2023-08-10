'use client';
import { format } from 'date-fns';
import { useState } from 'react';
import { Job } from '../interfaces';
import SectionHeader from './section-header';

export default function Experince({ jobs }: { jobs: Job[] }) {
  const [active, setActive] = useState(0);
  const activeClass = 'text-sm border-l-2';
  const inactiveClass = 'text-sm border-l-2 border-transparent';

  function formatDate(date: string | undefined): string {
    if (date) {
      return format(new Date(date), 'LLL yyyy');
    }

    return 'Present';
  }

  return (
    <div className="max-w-prose mx-auto py-4 text-slate-400">
      <SectionHeader title="Experince"></SectionHeader>
      <div className="flex">
        <div className="w-1/3">
          {jobs.map((job: Job, idx: number) => (
            <div
              className={`${active === idx ? activeClass : inactiveClass} p-2`}
              onClick={() => setActive(idx)}
              key={idx}
            >
              {job.company}
            </div>
          ))}
        </div>
        <div className="w-2/3 pl-5 pt-2">
          <div className="text-lg text-slate-300">{jobs[active].title}</div>
          <div className="text-xs">
            {format(new Date(jobs[active].dates.start), 'LLL yyyy')} - {formatDate(jobs[active].dates?.end)}
          </div>
          <div className=""></div>
          <div className="pt-3 text-slate-300">{jobs[active]?.tldr}</div>
          <div className="mt-5 p-5 border-t-2">
            <ul className="list-outside list-disc space-y-1">
              {jobs[active]?.highlights?.map((bullet: string, idx: number) => (
                <li className="p-2 text-sm" key={`b-${idx}`}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
