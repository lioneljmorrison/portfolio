import About from './components/about';
import Hero from './components/hero';
import Experience from './components/experience';
import MainNav from './components/nav';
import Projects from './components/projects';
import { aboutMe, contact, footerCopy, jobsData, navData, projectData, resumeUrl } from './data';
import { Job } from './interfaces';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <MainNav data={navData} name={aboutMe.name}></MainNav>
      <main className="container container-xl page-main">
        <Hero anchor="top" data={aboutMe} contact={contact}></Hero>
        <About anchor="about" data={aboutMe}></About>
        <Experience anchor="experience" jobs={jobsData as Job[]}></Experience>
        <Projects anchor="projects" data={projectData}></Projects>
      </main>
      <Footer anchor="contact" name={aboutMe.name} contact={contact} resumeUrl={resumeUrl} copy={footerCopy}></Footer>
    </>
  );
}
