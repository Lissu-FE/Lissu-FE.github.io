import Image from 'next/image'

import {
  HelloWrapper,
  MimojiWrapper,
  MyRole,
  SocialWrapper
} from './HelloStyle'

import GitHub from 'assets/github.svg'
import Instagram from 'assets/instagram.svg'
import memoji from 'assets/memoji.png'

const Hello = () => {
  return (
    <HelloWrapper>
      <MimojiWrapper>
        <Image src={memoji} alt='memoji' width={300} height={300} />
      </MimojiWrapper>
      <MyRole>Front-end Developer</MyRole>
      <SocialWrapper>
        <GitHub
          onClick={() => {
            window.open('https://github.com/Lissu-FE', '_blank')
          }}
        />
        <Instagram
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
