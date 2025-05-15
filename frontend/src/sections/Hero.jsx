import React from 'react'
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'

const Hero = () => {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen h-fit overflow-hidden c-space">
      <ParallaxBackground />
      <HeroText/>
    </section>
  )
}

export default Hero