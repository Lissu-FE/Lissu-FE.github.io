import AboutMe from '../AboutMe/AboutMe'
import Contact from '../Contact/Contact'
import Hello from '../Hello/Hello'
import Skills from '../Skills/Skills'
import WorkExperience from '../WorkExperience/WorkExperience'
import { AboutLissuMainWrapper } from './AboutLissuMainStyle'

const AboutLissuMain = () => {
  return (
    <AboutLissuMainWrapper>
      <Hello />
      <Skills />
      <AboutMe />
      <WorkExperience />
      <Contact />
    </AboutLissuMainWrapper>
  )
}

export default AboutLissuMain
