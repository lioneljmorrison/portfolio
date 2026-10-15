import Link from 'next/link';
import type { ProjectLinkData, Projects } from '../interfaces';
import Image from 'next/image';
import SectionHeader from './section-header';

type ProjectEntry = Projects[string];

function ProjectCard({ project, eager }: { project: ProjectEntry; eager?: boolean }) {
  const image = project.images?.['default'];
  const problem = project.problem ?? project.tldr;

  return (
    <article className="project-card">
      <Image
        src={image?.link ?? './assets/image-placeholder.png'}
        width={1200}
        height={514}
        alt={image?.alt ?? `${project.name} screenshot`}
        loading={eager ? 'eager' : 'lazy'}
        className="project-card-img"
      ></Image>
      <div className="project-card-body">
        <div>
          <div className="project-card-heading">
            <h3 className="project-card-name">{project.name}</h3>
            {project.kind && (
              <span className={`chip project-card-kind project-card-kind-${project.kind}`}>
                {project.kind === 'work' ? 'Work' : 'Personal'}
              </span>
            )}
          </div>
          {(problem || project.what || project.role) && (
            <dl>
              {problem && (
                <>
                  <dt>The problem</dt>
                  <dd>{problem}</dd>
                </>
              )}
              {project.what && (
                <>
                  <dt>What it does</dt>
                  <dd>{project.what}</dd>
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
          {project.detail && <p className="project-card-detail">{project.detail}</p>}
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
                <Link href={(meta as ProjectLinkData).link} className="btn btn-outline btn-sm" key={`link-${i}`}>
                  {name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects({ anchor, data }: { anchor: string; data: Projects }) {
  const visible = Object.entries(data).filter(([, project]) => project?.disabled !== true);
  const projects = visible.filter(([, project]) => !project.earlier);
  const earlier = visible.filter(([, project]) => project.earlier);

  return (
    <section id={anchor} className="section">
      <SectionHeader title="Projects"></SectionHeader>
      <ul className="project-list">
        {projects.map(([key, project], idx: number) => (
          <li key={key}>
            <ProjectCard project={project} eager={idx === 0} />
          </li>
        ))}
      </ul>
      {earlier.length > 0 && (
        <details className="earlier-work">
          <summary className="earlier-work-summary">Earlier work</summary>
          <ul className="project-list">
            {earlier.map(([key, project]) => (
              <li key={key}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}
