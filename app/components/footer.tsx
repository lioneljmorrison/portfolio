import type { AboutMe, Contact, NavLink } from '../interfaces';

export default function Footer({
  anchor,
  name,
  contact,
  resume,
}: {
  anchor: string;
  name: AboutMe['name'];
  contact: Contact;
  resume?: NavLink;
}) {
  const year = new Date().getFullYear();

  return (
    <footer id={anchor} className="site-footer">
      <div className="footer-band">
        <div className="container container-xl footer-inner">
          <h2 className="footer-title">Get in touch</h2>
          <p className="p-lg footer-copy">Have a project or a role in mind? I would like to hear about it.</p>
          <div className="footer-actions">
            {contact.email && (
              <a className="btn btn-solid btn-md" href={`mailto:${contact.email}`}>
                Email
              </a>
            )}
            {contact.github && (
              <a className="btn btn-outline btn-md" href={contact.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {resume && (
              <a className="btn btn-outline btn-md" href={resume.href} target="_blank" rel="noreferrer">
                Resume
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="container container-xl footer-meta">
        <p className="meta-text">
          &copy; {year} {name}
        </p>
      </div>
    </footer>
  );
}
