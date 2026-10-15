import Link from 'next/link';
import type { ProjectLinkData, Projects } from '../interfaces';
import Image from 'next/image';
import SectionHeader from './section-header';

export default function Projects({ anchor, data }: { anchor: string; data: Projects }) {
  const projects = Object.entries(data).filter(([, project]) => project?.disabled !== true);

  return (
    <section id={anchor} className="section section--wide">
      <SectionHeader title="Projects"></SectionHeader>
      {projects.map(([key, project], idx: number) => {
        const image = project.images?.['default'];

        return (
          <article key={key} className={`project${idx % 2 ? ' project--reverse' : ''}`}>
            <h3 className="h5 project-title">{project.name}</h3>
            <Image
              src={image?.link ?? './assets/image-placeholder.png'}
              width={500}
              height={250}
              alt={image?.alt ?? `${project.name} screenshot`}
              loading={idx === 0 ? 'eager' : 'lazy'}
              className="project-img"
            ></Image>
            {project.tldr && <p className="project-tldr">{project.tldr}</p>}
            {project.techLabels && (
              <ul className="chip-list project-labels">
                {project.techLabels.map((label: string, i: number) => (
                  <li key={`tl-${i}`} className="chip">
                    {label}
                  </li>
                ))}
              </ul>
            )}
            {project.links && (
              <div className="project-links">
                {Object.entries(project.links).map(([name, meta], i: number) => (
                  <Link href={(meta as ProjectLinkData).link} className="btn btn-outline btn-sm" key={`link-${i}`}>
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
}
