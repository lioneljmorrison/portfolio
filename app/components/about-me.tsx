import type { AboutMe } from '../interfaces';

export default function AboutMe({ anchor, data }: { anchor: string; data: AboutMe }) {
  return (
    <section id={anchor} className="section">
      <p className="h5 about-intro">{data.intro}</p>
      <h1 className="dh3 about-name">{data.name}</h1>
      <p className="p-lg about-tldr">{data.tldr}</p>
      {data.quote && (
        <figure className="card-subtle about-quote">
          <svg className="about-quote-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
          </svg>
          <div className="about-quote-body">
            <blockquote>
              <p>{data.quote.text}</p>
            </blockquote>
            <figcaption className="p-sm">{data.quote.author}</figcaption>
          </div>
          <svg className="about-quote-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
            <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
          </svg>
        </figure>
      )}
      <h3 className="h6 skills-title">{data.skillsTitle}</h3>
      <ul className="chip-list">
        {data.skills.map((skill, idx) => (
          <li key={`s-${idx}`} className="chip">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
