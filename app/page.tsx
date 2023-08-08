import AboutMe from './components/about-me';
import MiniResume from './components/mini-resume';
import MainNav from './components/nav';
import { jobsData } from './data';
import { Job } from './interfaces';

export default function Home() {
  return (
    <>
      <MainNav></MainNav>
      <AboutMe></AboutMe>
      <MiniResume jobs={jobsData as Job[]}></MiniResume>
    </>
  );
}
