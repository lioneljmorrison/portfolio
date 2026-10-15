import Link from 'next/link';
import type { ProjectLinkData, Projects } from '../interfaces';
import Image from 'next/image';
import SectionHeader from './section-header';

export default function Projects({ anchor, data }: { anchor: string; data: Projects }) {
  const projects = Object.entries(data).filter(([, project]) => project?.disabled !== true);

  return (
    <section id={anchor} className="section">
      <SectionHeader title="Projects"></SectionHeader>
      <ul className="project-list">
        {projects.map(([key, project], idx: number) => {
          const image = project.images?.['default'];
          const problem = project.problem ?? project.tldr;

          return (
            <li key={key}>
              <article className="project-card">
                <Image
                  src={image?.link ?? './assets/image-placeholder.png'}
                  width={1200}
                  height={514}
                  alt={image?.alt ?? `${project.name} screenshot`}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="project-card-img"
                ></Image>
                <div className="project-card-body">
                  <div>
                    <h3 className="project-card-name">{project.name}</h3>
                    {(problem || project.role) && (
                      <dl>
                        {problem && (
                          <>
                            <dt>The problem</dt>
                            <dd>{problem}</dd>
                          </>
                        )}
                        {project.role && (
                          <>
                            <dt>My role</dt>
                            <dd>{project.role}</dd>
                          </>
                        )}
                      </dl>
                    )}
                  </div>
                  <div>
                    {project.techLabels && (
                      <>
                        <p className="project-card-label">Stack</p>
                        <ul className="chip-list">
                          {project.techLabels.map((label: string, i: number) => (
                            <li key={`tl-${i}`} className="chip">
                              {label}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    {project.links && (
                      <div className="project-card-links">
                        {Object.entries(project.links).map(([name, meta], i: number) => (
                          <Link
                            href={(meta as ProjectLinkData).link}
                            className="btn btn-outline btn-sm"
                            key={`link-${i}`}
                          >
                            {name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
