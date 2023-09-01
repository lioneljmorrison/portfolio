import Link from 'next/link';
import { ProjectLinkData, ProjectLinks, Projects } from '../interfaces';
import Image from 'next/image';
import SectionHeader from './section-header';
import { technology } from '../data';

export default function Projects({ anchor, data }: { anchor: string; data: Projects }) {
  function renderLinks(links: ProjectLinks, cssClass?: string, reverse?: boolean) {
    return links ? (
      <div className={`flex space-x-1 ${reverse ? 'sm:justify-end' : ''}`}>
        {Object.entries(links).map((item, idx: number) => {
          const [name, meta] = [...item];
          return (
            <Link href={(meta as ProjectLinkData).link} className={cssClass} key={`link-${idx}`}>
              {name}
            </Link>
          );
        })}
      </div>
    ) : (
      ''
    );
  }

  function renderLabels(labels: string[], cssClass?: string, reverse?: boolean) {
    return labels ? (
      <div className={`grid gap-1 grid-cols-3 sm:grid-cols-4 sm:flex sm:space-1  ${reverse ? 'sm:justify-end' : ''}`}>
        {labels.map((item: string, idx: number) => (
          <div className={cssClass} key={`tl-${idx}`}>
            {technology[item]?.label || ''}
          </div>
        ))}
      </div>
    ) : (
      ''
    );
  }

  const projects = Object.entries(data)
    .map((item) => (item[1]?.disabled !== true ? item : undefined))
    .filter((item) => item !== undefined);

  return (
    <div id={anchor} className="max-w-prose mx-auto py-4 text-slate-400">
      <SectionHeader title="Projects"></SectionHeader>
      {projects.map((data: any, idx: number) => {
        const [, project] = [...data];
        const odd = !!(idx % 2);

        return (
          <>
            <div className="grid grid-cols-10 gap-4 sm:pb-12 pb-12">
              <div className={`project-title ${!odd ? 'project-left' : 'project-right'}`}>{project.name}</div>
              <Image
                src={project.images ? project.images['default'].link : './assets/image-placeholder.png'}
                width={500}
                height={250}
                alt="Alt Text"
                loading="lazy"
                className={`project-img ${odd ? 'project-left' : 'project-right'}`}
              ></Image>
              <div className={`project-tldr ${!odd ? 'project-left' : 'project-right'}`}>{project.tldr}</div>
              <div className={`project-labels ${!odd ? 'project-left' : 'project-right'}`}>
                {renderLabels(
                  project.techLabels,
                  'text-center text-xs py-1 px-2 bg-gray-800 border-gray-900 rounded',
                  odd
                )}
              </div>
              <div className={`project-links ${!odd ? 'project-left' : 'project-right'}`}>
                {renderLinks(
                  project.links,
                  'text-center text-xs py-1 px-2 border-gray-800 border-2 rounded hover:underline',
                  odd
                )}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
