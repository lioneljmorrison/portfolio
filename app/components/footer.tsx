import type { AboutMe, Contact, FooterCopy } from '../interfaces';

export default function Footer({
  anchor,
  name,
  contact,
  resumeUrl,
  copy,
}: {
  anchor: string;
  name: AboutMe['name'];
  contact: Contact;
  resumeUrl?: string;
  copy: FooterCopy;
}) {
  const year = new Date().getFullYear();

  return (
    <footer id={anchor} className="site-footer">
      <div className="footer-band">
        <div className="container container-xl footer-inner">
          <h2 className="footer-title">{copy.title}</h2>
          <p className="p-lg footer-copy">{copy.text}</p>
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
            {contact.linkedin && (
              <a className="btn btn-outline btn-md" href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
            {resumeUrl && (
              <a className="btn btn-outline btn-md" href={resumeUrl} target="_blank" rel="noreferrer">
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
