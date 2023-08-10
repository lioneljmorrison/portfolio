import { AboutMe } from '../interfaces';

export default function AboutMe({ data }: { data: AboutMe }) {
  return (
    <div className="max-w-prose mx-auto py-4 text-slate-400 ">
      <div className="text-3xl mx-auto py-1 text-slate-400">{data.intro}</div>
      <div className="text-5xl mx-auto py-2 text-sky-500">{data.name}</div>
      <div className="mx-auto py-2 text-md">
        {data.tldr}
        {!data.quote || (
          <div className="flex p-5 text-sm text-slate-400">
            <svg
              className="text-5xl fill-sky-500"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
            </svg>
            <div className="p-3">
              {data.quote?.text} - <span className="italic">{data.quote?.author}</span>
            </div>
            <svg
              className="text-5xl fill-sky-500"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
            </svg>
          </div>
        )}
        <div className="pt-3 text-md text-slate-300">{data.skillsTitle}</div>
        <div className="pt-3 flex flex-row space-x-2 text-xs">
          {data.skills.map((skill, idx) => (
            <div key={`s-${idx}`} className="py-1 px-2 bg-gray-900 rounded">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
