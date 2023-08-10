import AboutMe from './components/about-me';
import Experince from './components/experince';
import MainNav from './components/nav';
import { aboutMe, jobsData, navData } from './data';
import { Job } from './interfaces';

export default function Home() {
  return (
    <>
      <MainNav data={navData}></MainNav>
      <div className="w-auto p-4 md:p-6 bg-gray-700">
        <AboutMe data={aboutMe}></AboutMe>
        <Experince jobs={jobsData as Job[]}></Experince>
      </div>
    </>
  );
}
