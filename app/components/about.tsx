import Image from 'next/image';
import type { AboutMe } from '../interfaces';
import SectionHeader from './section-header';
import { asset } from '../lib/asset';

export default function About({ anchor, data }: { anchor: string; data: AboutMe }) {
  return (
    <section id={anchor} className="section">
      <SectionHeader title="About"></SectionHeader>
      <div className={data.portrait ? 'about about-with-portrait' : 'about'}>
        {data.portrait && (
          <Image
            className="about-portrait"
            src={asset(data.portrait.link)}
            alt={data.portrait.alt}
            width={240}
            height={240}
          />
        )}
        <div className="about-text">
          {data.bio.map((paragraph, idx) => (
            <p key={`bio-${idx}`} className="p-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
