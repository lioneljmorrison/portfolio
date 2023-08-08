'use client';
import { format } from 'date-fns';
import { useState } from 'react';
import { Job } from '../interfaces';

export default function MiniResume(props: data) {
  const [active, setActive] = useState(0);
  const activeClass = 'border-l-2';
  const inactiveClass = 'border-l-2 border-transparent';

  return (
    <div className="bg-gray-700 text-slate-400">
      <div className="max-w-7xl mx-auto py-4 ">
        <div className="max-w-lg flex mx-auto text-sm">
          <div className="w-1/3">
            {props.jobs.map((job: Job, idx: number) => (
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
            <div className="text-lg text-slate-300">{props.jobs[active].title}</div>
            <div className="text-xs">
              {format(new Date(props.jobs[active].dates.start), 'LLL yyyy')} -
              {props.jobs[active].dates?.end ? format(new Date(props.jobs[active].dates.end), 'LLL yyyy') : 'Present'}
            </div>
            <div className=""></div>
            <div className="pt-3 text-slate-300">{props.jobs[active]?.tldr}</div>
            <div className="mt-5 p-5 border-t-2">
              <ul className="list-outside list-disc">
                {props.jobs[active]?.highlights?.map((bullet: string, idx: number) => (
                  <li className="pb-2" key={`b-${idx}`}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
