import React, { useState, useCallback, useEffect, useRef } from 'react'

import {
  ProgressBarWrapper,
  TimeCompleted,
  TimeRemaining,
  BarWrapper,
  CompleteBar
} from './ProgressBarStyle'

const ProgressBar = ({ totalTime }) => {
  const [width, setWidth] = useState<number>(0)

  const handleScroll = useCallback((): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement

    if (scrollTop === 0) {
      setWidth(0)
      return
    }

    const windowHeight: number = scrollHeight - clientHeight

    const currentPercent: number = scrollTop / windowHeight

    setWidth(currentPercent * 100)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)

    return () => {
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [handleScroll])

  const completeTime = (totalTime * width) / 100

  return (
    <ProgressBarWrapper>
      <TimeCompleted>
        {String(Math.floor((completeTime % 3600) / 60)).padStart(2, '0')}:
        {String(Math.floor(completeTime % 60)).padStart(2, '0')}
      </TimeCompleted>
      <BarWrapper>
        <CompleteBar width={width} />
      </BarWrapper>
      <TimeRemaining>
        {String(Math.floor(((totalTime - completeTime) % 3600) / 60)).padStart(
          2,
          '0'
        )}
        :{String(Math.floor((totalTime - completeTime) % 60)).padStart(2, '0')}
      </TimeRemaining>
    </ProgressBarWrapper>
  )
}

export default ProgressBar
