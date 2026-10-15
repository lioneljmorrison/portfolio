import type { AboutMe, Contact } from '../interfaces';

export default function Hero({ anchor, data, contact }: { anchor: string; data: AboutMe; contact: Contact }) {
  const hasContact = Object.values(contact).some((value) => Boolean(value));

  return (
    <section id={anchor} className="hero">
      <div className="hero-main">
        {data.role && <p className="kicker hero-kicker">{data.role}</p>}
        <h1 className="hero-name">{data.name}</h1>
        <p className="p-lg hero-pitch">{data.pitch ?? data.tldr}</p>
        <div className="hero-cta">
          <a className="btn btn-solid btn-md" href="#projects">
            See projects
          </a>
          {hasContact && (
            <a className="btn btn-outline btn-md" href="#contact">
              Contact me
            </a>
          )}
        </div>
      </div>
      <aside className="hero-card">
        <h2 className="kicker hero-card-title">{data.skillsTitle}</h2>
        <ul className="chip-list">
          {data.skills.map((skill, idx) => (
            <li key={`s-${idx}`} className="chip">
              {skill}
            </li>
          ))}
        </ul>
        {data.quote && (
          <figure className="hero-quote">
            <blockquote>
              <p>{data.quote.text}</p>
            </blockquote>
            <figcaption className="p-sm">{data.quote.author}</figcaption>
          </figure>
        )}
      </aside>
    </section>
  );
}
