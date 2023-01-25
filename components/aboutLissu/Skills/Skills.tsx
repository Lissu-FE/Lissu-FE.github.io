import {
  frontEndSkills,
  versionControlSkills,
  communicationSkills,
  certificateSkills
} from './skillList'
import {
  SkillsWrapper,
  MainTitle,
  SubTitle,
  IconWrapper,
  OneSkill,
  OneIcon,
  SkillIcon
} from './SkillsStyle'

const Skills = () => {
  return (
    <SkillsWrapper>
      <MainTitle>I Can Do 💪</MainTitle>
      <SubTitle>Front - end</SubTitle>
      <IconWrapper>
        {frontEndSkills.map((skill) => (
          <OneSkill key={skill.alt}>
            <OneIcon>
              <SkillIcon
                src={skill.src}
                alt={skill.alt}
                width={100}
                height={100}
              />
            </OneIcon>
            <div>{skill.alt} </div>
          </OneSkill>
        ))}
      </IconWrapper>
      <SubTitle>Version Control</SubTitle>
      <IconWrapper>
        {versionControlSkills.map((skill) => (
          <OneSkill key={skill.alt}>
            <OneIcon>
              <SkillIcon
                src={skill.src}
                alt={skill.alt}
                width={100}
                height={100}
              />
            </OneIcon>
            <div>{skill.alt} </div>
          </OneSkill>
        ))}
      </IconWrapper>
      <SubTitle>Communication</SubTitle>
      <IconWrapper>
        {communicationSkills.map((skill) => (
          <OneSkill key={skill.alt}>
            <OneIcon>
              <SkillIcon
                src={skill.src}
                alt={skill.alt}
                width={100}
                height={100}
              />
            </OneIcon>
            <div>{skill.alt} </div>
          </OneSkill>
        ))}
      </IconWrapper>
      <SubTitle>Certificate</SubTitle>
      <IconWrapper>
        {certificateSkills.map((skill) => (
          <OneSkill key={skill.alt}>
            <OneIcon>
              <SkillIcon
                src={skill.src}
                alt={skill.alt}
                width={100}
                height={100}
              />
            </OneIcon>
            <div>{skill.alt} </div>
          </OneSkill>
        ))}
      </IconWrapper>
    </SkillsWrapper>
  )
}

export default Skills
