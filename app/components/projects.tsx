import Link from 'next/link';
import { ProjectLinkData, ProjectLinks, Projects, TechLables } from '../interfaces';
import Image from 'next/image';
import SectionHeader from './section-header';

export default function Projects({ anchor, data }: { anchor: string; data: Projects }) {
  function renderLinks(links: ProjectLinks, cssClass?: string, reverse?: boolean) {
    return links ? (
      <div className={`flex ${reverse ? 'flex-row-reverse ' : ''}py-3`}>
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
      <div className={`flex ${reverse ? 'flex-row-reverse ' : ''}py-3`}>
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
        const odd = !!((idx + 1) % 2);

        return odd ? (
          <>
            <div className="grid grid-cols-10 pb-12">
              <div className="row-span-full col-start-1 col-span-6 self-center">
                <Image
                  src={project.images ? project.images['default'].link : './assets/image-placeholder.png'}
                  width={500}
                  height={250}
                  alt="Alt Text"
                  loading="lazy"
                  className="border-2 rounded-lg"
                ></Image>
              </div>
              <div className="row-span-full col-span-6 col-end-11 self-center p-4">
                <div className="p-3 pr-0 text-right text-lg text-slate-300">{project.name}</div>
                <div className="p-4 text-xs bg-gray-800 rounded-lg">{project.tldr}</div>
                {renderLabels(project.techLabels, 'text-xs py-1 px-2 m-1 bg-gray-800 border-gray-900 rounded', true)}
                {renderLinks(project.links, 'text-xs py-1 px-2 m-1 hover:underline', true)}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-10 pb-12">
              <div className="z-10 row-span-full col-start-1 col-span-6 self-center p-4">
                <div className="p-3 pr-0 text-lg text-slate-300">{project.name}</div>
                <div className="p-4 text-xs bg-gray-800 rounded-lg">{project.tldr}</div>
                {renderLabels(project.techLabels, 'text-xs py-1 px-2 m-1 bg-gray-800 border-gray-900 rounded')}
                {renderLinks(project.links, 'text-xs py-1 px-2 m-1 hover:underline')}
              </div>
              <div className="row-span-full col-span-6 col-end-11 self-center">
                <Image
                  src={project.images ? project.images['default'].link : './assets/image-placeholder.png'}
                  width={500}
                  height={250}
                  alt="Alt Text"
                  loading="lazy"
                  className="border-2 rounded-lg"
                ></Image>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
