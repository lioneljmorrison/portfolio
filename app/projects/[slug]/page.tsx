import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '../../components/footer';
import MainNav from '../../components/nav';
import { projectTag } from '../../components/projects';
import SectionHeader from '../../components/section-header';
import { aboutMe, contact, footerCopy, navData, projectData, resumeUrl } from '../../data';
import { asset } from '../../lib/asset';

// Current projects with a case-study page, in data order (also the prev/next order).
const caseStudies = Object.values(projectData).filter((p) => p.slug && !p.disabled && !p.earlier);

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug as string }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.name} — ${aboutMe.name}`;
  const image = project.images?.['default'];
  // Relative to metadataBase (root layout), which carries the /portfolio/ prefix.
  const ogImage = (image?.link ?? './assets/image-placeholder.png').replace(/^\.?\//, '');
  return {
    title,
    description: project.tagline,
    openGraph: { type: 'article', title, description: project.tagline, images: [{ url: ogImage, alt: image?.alt }] },
    twitter: { card: 'summary_large_image', title, description: project.tagline, images: [ogImage] },
  };
}

export default async function CaseStudy({ params }: { params: Params }) {
  const { slug } = await params;
  const index = caseStudies.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const project = caseStudies[index];
  const prev = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];
  const image = project.images?.['default'];
  const summary = [project.problem, project.what].filter(Boolean).join(' ');

  return (
    <>
      <MainNav data={navData} name={aboutMe.name}></MainNav>
      <main className="container container-xl page-main case">
        <header className="case-hero">
          <Image
            src={asset(image?.link ?? './assets/image-placeholder.png')}
            width={1200}
            height={514}
            alt={image?.alt ?? `${project.name} screenshot`}
            priority
            className="project-card-img case-hero-img"
          ></Image>
          <span className="chip project-card-kind">{projectTag(project)}</span>
          <h1 className="case-title">{project.name}</h1>
          {project.tagline && <p className="p-lg case-tagline">{project.tagline}</p>}
        </header>

        <div className="case-summary">
          <section className="case-text">
            <h2 className="case-heading">Summary</h2>
            <p>{summary}</p>
          </section>
          <aside className="card case-info" aria-label="Project info">
            <h2 className="case-heading">Project info</h2>
            <dl>
              {project.client && (
                <>
                  <dt>Client</dt>
                  <dd>{project.client}</dd>
                </>
              )}
              {project.role && (
                <>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </>
              )}
              {project.techLabels && (
                <>
                  <dt>Stack</dt>
                  <dd>
                    <ul className="chip-list">
                      {project.techLabels.map((label: string) => (
                        <li key={label} className="chip">
                          {label}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </>
              )}
            </dl>
            {project.links && (
              <div className="project-card-links">
                {Object.entries(project.links).map(([name, meta]) => (
                  <a href={meta.link} className="btn btn-outline btn-sm" key={name} target="_blank" rel="noreferrer">
                    {name}
                  </a>
                ))}
              </div>
            )}
            {!project.links && project.access && (
              <p className="project-card-access">
                {project.access === 'internal' ? 'Internal tool, not publicly available' : 'Private repository'}
              </p>
            )}
          </aside>
        </div>

        {project.results && project.results.length > 0 && (
          <ul className="stat-tiles">
            {project.results.map((r) => (
              <li key={r.label} className="card stat-tile">
                <span className="stat-value">{r.value}</span>
                <span className="stat-label">{r.label}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="case-body">
          {project.problem && (
            <section className="case-text">
              <h2 className="case-heading">The Challenge</h2>
              <p>{project.problem}</p>
            </section>
          )}
          {(project.what || project.approach) && (
            <section className="case-text">
              <h2 className="case-heading">The Approach</h2>
              {project.what && <p>{project.what}</p>}
              {project.approach && (
                <ul className="case-list">
                  {project.approach.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          )}
          {project.detail && (
            <section className="case-text">
              <h2 className="case-heading">The Results</h2>
              <p>{project.detail}</p>
            </section>
          )}
        </div>

        {project.diagram && (
          <section className="section case-figure">
            <SectionHeader title="Architecture"></SectionHeader>
            <Image
              src={asset(project.diagram.link)}
              width={1200}
              height={514}
              alt={project.diagram.alt}
              className="case-diagram"
            ></Image>
          </section>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <section className="section case-figure">
            <SectionHeader title="Gallery"></SectionHeader>
            <ul className="case-gallery">
              {project.gallery.map((g) => (
                <li key={g.src}>
                  <figure>
                    <Image src={asset(g.src)} width={1200} height={750} alt={g.alt} className="case-diagram"></Image>
                    <figcaption>{g.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        )}

        <nav className="case-pager" aria-label="More projects">
          <Link href={`/projects/${prev.slug}`} className="btn btn-outline btn-md" rel="prev">
            ← {prev.name}
          </Link>
          <Link href="/#projects" className="btn btn-solid btn-md">
            Back to projects
          </Link>
          <Link href={`/projects/${next.slug}`} className="btn btn-outline btn-md" rel="next">
            {next.name} →
          </Link>
        </nav>
      </main>
      <Footer anchor="contact" name={aboutMe.name} contact={contact} resumeUrl={resumeUrl} copy={footerCopy}></Footer>
    </>
  );
}
