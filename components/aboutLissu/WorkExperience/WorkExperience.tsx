import {
  WorkExperienceWrapper,
  MainTitle,
  WorkBoxSection,
  MyPosition
} from './WorkExperienceStyle'

const WorkExperience = () => {
  return (
    <WorkExperienceWrapper>
      <MainTitle>Work Experience 💻</MainTitle>
      <WorkBoxSection>
        <MyPosition>Lead Front-End Developer</MyPosition>
        <div>B factory</div>
        <div>2023.04 ~ </div>
      </WorkBoxSection>
      <WorkBoxSection>
        <MyPosition>Lead Front-End Developer</MyPosition>
        <div>Blinkers</div>
        <div>2022.09 ~ 2023.02</div>
      </WorkBoxSection>
      <WorkBoxSection>
        <MyPosition>Front-End Developer</MyPosition>
        <div>next level studio</div>
        <div>2019.11 ~ 2022.08</div>
      </WorkBoxSection>

      <WorkBoxSection>
        <MyPosition>Middle-Tier Web Developer</MyPosition>
        <div>비즈아이솔루션</div>
        <div>2017.02 ~ 2019.08</div>
      </WorkBoxSection>
    </WorkExperienceWrapper>
  )
}

export default WorkExperience
