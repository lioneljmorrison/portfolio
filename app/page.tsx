import Script from 'next/script';
import Hero from './components/hero';
import Experience from './components/experience';
import MainNav from './components/nav';
import Projects from './components/projects';
import { aboutMe, contact, jobsData, navData, projectData } from './data';
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
        <Hero anchor="about" data={aboutMe} contact={contact}></Hero>
        <Experience anchor="experience" jobs={jobsData as Job[]}></Experience>
        <Projects anchor="projects" data={projectData}></Projects>
      </main>
      <Footer anchor="contact" name={aboutMe.name} contact={contact} resume={navData.Resume}></Footer>
    </>
  );
}
