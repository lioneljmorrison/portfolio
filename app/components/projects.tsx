import Link from 'next/link';
import type { ProjectLinkData, Projects } from '../interfaces';
import Image from 'next/image';
import SectionHeader from './section-header';
import { asset } from '../lib/asset';

type ProjectEntry = Projects[string];

export function projectTag(project: ProjectEntry): string {
  return project.client === 'MRCOOL' ? 'Work · MRCOOL' : 'Personal';
}

function ProjectCard({ project, eager }: { project: ProjectEntry; eager?: boolean }) {
  const image = project.images?.['default'];
  const problem = project.problem ?? project.tldr;

  return (
    <article className="project-card">
      <Image
        src={asset(image?.link ?? './assets/image-placeholder.png')}
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
          {!project.links && project.access && (
            <p className="project-card-access">
              {project.access === 'internal' ? 'Internal tool, not publicly available' : 'Private repository'}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

// Current project: a lighter card that links to its case-study page.
function ProjectTile({ project, eager }: { project: ProjectEntry; eager?: boolean }) {
  const image = project.images?.['default'];

  return (
    <Link href={`/projects/${project.slug}`} className="project-tile">
      <Image
        src={asset(image?.link ?? './assets/image-placeholder.png')}
        width={1200}
        height={514}
        alt={image?.alt ?? `${project.name} screenshot`}
        loading={eager ? 'eager' : 'lazy'}
        className="project-tile-img"
      ></Image>
      <div className="project-tile-body">
        <span className="chip project-card-kind">{projectTag(project)}</span>
        <h3 className="project-card-name">{project.name}</h3>
        {project.tagline && <p className="project-tile-tagline">{project.tagline}</p>}
        {project.techLabels && (
          <ul className="chip-list">
            {project.techLabels.slice(0, 4).map((label: string) => (
              <li key={label} className="chip">
                {label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}

export default function Projects({ anchor, data }: { anchor: string; data: Projects }) {
  const visible = Object.entries(data).filter(([, project]) => project?.disabled !== true);
  const projects = visible.filter(([, project]) => !project.earlier);
  const earlier = visible.filter(([, project]) => project.earlier);

  return (
    <section id={anchor} className="section">
      <SectionHeader title="Projects"></SectionHeader>
      <ul className="project-list project-grid">
        {projects.map(([key, project], idx: number) => (
          <li key={key}>
            {project.slug ? (
              <ProjectTile project={project} eager={idx < 2} />
            ) : (
              <ProjectCard project={project} eager={idx < 2} />
            )}
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
