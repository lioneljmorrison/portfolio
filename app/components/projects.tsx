import Link from 'next/link';
import { ProjectLinkData, ProjectLinks, Projects, TechLables } from '../interfaces';
import Image from 'next/image';
import SectionHeader from './section-header';

export default function Projects({ anchor, data }: { anchor: string; data: Projects }) {
  function renderLinks(links: ProjectLinks, cssClass?: string, reverse?: boolean) {
    return links ? (
      <div className="flex justify-end space-x-1">
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

  function renderLabels(labels: TechLables[], cssClass?: string, reverse?: boolean) {
    return labels ? (
      <div className="grid gap-1 grid-cols-3 sm:grid-cols-4 sm:flex sm:justify-end sm:space-1">
        {labels.map((item: string, idx: number) => (
          <div className={cssClass} key={`tl-${idx}`}>
            {item}
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
        const [item, project] = [...data];

        return (
          <>
            <div className="grid grid-cols-10 gap-4 sm:pb-12 pb-12">
              <div className="col-span-full sm:z-10 sm:order-2 sm:row-span-full sm:col-span-6 sm:col-end-11 sm:self-start sm:text-right sm:p-3 sm:text-xl text-slate-300">
                {project.name}
              </div>
              <Image
                src={project.images ? project.images['default'].link : './assets/image-placeholder.png'}
                width={500}
                height={250}
                alt="Alt Text"
                loading="lazy"
                className="sm:order-1 sm:row-span-full sm:col-start-1 col-span-full sm:col-span-6 border-2 rounded-lg bd-pink-500"
              ></Image>
              <div className="sm:z-10 sm:row-span-full col-start-1 col-span-full sm:col-start-5 sm:col-span-6 sm:self-center p-4 text-xs bg-gray-800 rounded-lg">
                {project.tldr}
              </div>
              <div className="sm:z-10 sm:row-span-full col-start-1 col-span-full sm:col-start-2 md:col-start-5 sm:col-span-full sm:self-end sm:mb-10 md:mb-10">
                {renderLabels(
                  project.techLabels,
                  'text-center text-xs py-1 px-2 bg-gray-800 border-gray-900 rounded',
                  true
                )}
              </div>
              <div className="sm:z-10 sm:row-span-full col-start-1 col-span-full sm:col-start-5 sm:col-span-6 sm:self-end">
                {renderLinks(
                  project.links,
                  'text-center text-xs py-1 px-2 border-gray-800 border-2 rounded hover:underline',
                  true
                )}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
