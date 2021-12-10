import React from 'react'
import About from './components/About'
import Club from './components/Club'
import Faq from './components/Faq'
import Hero from './components/Hero'
import Mint from './components/Mint'
import NFT from './components/NFT'
import RoadMap from './components/RoadMap'
import Story from './components/Story'
import Team from './components/Team'

export default function Home() {
    return (
        <>
        <Hero/>
        <About/>
        <Mint/>
        <NFT/>
        <Club/>
        <Story/>
        <RoadMap/>
        <Team/>
        <Faq/>
        </>
    )
}
