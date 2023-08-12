import Script from 'next/script';
import AboutMe from './components/about-me';
import Experience from './components/experience';
import MainNav from './components/nav';
import Projects from './components/projects';
import { aboutMe, jobsData, navData, projectData } from './data';
import { Job } from './interfaces';
import Contact from './contact';
import { featureFlags } from './flags';

export default function Home() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-14RLENLVJH" />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
   
            gtag('config', 'G-14RLENLVJH');
          `}
      </Script>
      <MainNav data={navData} name={aboutMe.name}></MainNav>
      <div className="w-auto p-4 md:p-6 bg-gray-700">
        <AboutMe anchor="about" data={aboutMe}></AboutMe>
        <Experience anchor="experience" jobs={jobsData as Job[]}></Experience>
        <Projects anchor="projects" data={projectData}></Projects>
        {featureFlags.contact_form ? <Contact anchor="contact"></Contact> : ''}
      </div>
    </>
  );
}
