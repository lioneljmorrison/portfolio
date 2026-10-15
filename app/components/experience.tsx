import { format } from 'date-fns';
import { Job } from '../interfaces';
import SectionHeader from './section-header';

function formatDate(date: string | undefined): string {
  if (date) {
    if (/^\d{4}$/.test(date)) {
      return date;
    }

    return format(new Date(date), 'LLL yyyy');
  }

  return 'Present';
}

export default function Experience({ anchor, jobs }: { anchor: string; jobs: Job[] }) {
  return (
    <section id={anchor} className="section">
      <SectionHeader title="Experience"></SectionHeader>
      <ol className="timeline">
        {jobs.map((job: Job) => (
          <li key={job.id} className="timeline-item">
            <div className="timeline-head">
              <p className="meta-text timeline-dates">
                {formatDate(job.dates.start)} - {formatDate(job.dates.end)}
              </p>
              <h3 className="h5 timeline-company">{job.company}</h3>
              <p className="timeline-role">{job.title}</p>
            </div>
            <div className="timeline-body">
              {job.tldr && <p className="timeline-tldr">{job.tldr}</p>}
              {job.highlights && job.highlights.length > 0 && (
                <ul className="p-sm timeline-highlights">
                  {job.highlights.map((bullet: string, idx: number) => (
                    <li key={`b-${idx}`}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
