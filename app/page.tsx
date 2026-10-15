import Script from 'next/script';
import About from './components/about';
import Hero from './components/hero';
import Experience from './components/experience';
import MainNav from './components/nav';
import Projects from './components/projects';
import { aboutMe, contact, footerCopy, jobsData, navData, projectData, resumeUrl } from './data';
import { Job } from './interfaces';
import Footer from './components/footer';
import Chatbot from './components/chatbot';

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
      <Chatbot></Chatbot>
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
