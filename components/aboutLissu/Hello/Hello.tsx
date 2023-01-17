import Image from 'next/image'

import {
  HelloWrapper,
  MimojiWrapper,
  MyRole,
  SocialWrapper,
  GitIcon,
  InstagramIcon
} from './HelloStyle'

import gitHub from 'assets/github.png'
import instagram from 'assets/instagram.png'
import memoji from 'assets/memoji.png'

const Hello = () => {
  return (
    <HelloWrapper>
      <MimojiWrapper>
        <Image src={memoji} alt='memoji' width={300} height={300} />
      </MimojiWrapper>
      <MyRole>Front-end Developer</MyRole>
      <SocialWrapper>
        <GitIcon
          src={gitHub}
          alt='gitHub'
          width={48}
          height={48}
          onClick={() => {
            window.open('https://github.com/Lissu-FE', '_blank')
          }}
        />
        <InstagramIcon
          src={instagram}
          alt='instagram'
          width={48}
          height={48}
          onClick={() => {
            window.open('https://www.instagram.com/lissu_o_o/', '_blank')
          }}
        />
      </SocialWrapper>
      <div>안녕하세요!</div>
      <div>저는 이슬 입니다 :D</div>
    </HelloWrapper>
  )
}

export default Hello
