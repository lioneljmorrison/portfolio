import AboutMe from './components/about-me';
import Experience from './components/experience';
import MainNav from './components/nav';
import Projects from './components/projects';
import { aboutMe, jobsData, navData, projectData } from './data';
import { Job } from './interfaces';

export default function Home() {
  return (
    <>
      <MainNav data={navData}></MainNav>
      {/* <div className="w-auto p-4 md:p-6 bg-gray-700"> */}
      <div className="max-w-7xl mx-auto bg-gray-700">
        {/* <div className="max-w-7xl mx-auto py-4 px-2 sm:px-6 lg:px-8 bg-gray-700"> */}
        <AboutMe anchor="about" data={aboutMe}></AboutMe>
        <Experience anchor="experience" jobs={jobsData as Job[]}></Experience>
        <Projects anchor="projects" data={projectData}></Projects>
      </div>
    </>
  );
}
