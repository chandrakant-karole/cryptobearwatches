import React from 'react'
import Header from '../src/LandingPage/Header'
import HeroSection from '../src/LandingPage/HeroSection'
import AboutSection from '../src/LandingPage/AboutSection'
import BuyStrip from '../src/LandingPage/BuyStrip'
import SpecSection from '../src/LandingPage/SpecSection'
import Team from '../src/LandingPage/Team'
import Footer from '../src/LandingPage/Footer'
import RoadMap from '../src/LandingPage/RoadMap'
import Faq from './LandingPage/Faq'
import WhatNext from './LandingPage/WhatNext'
export default function Landing() {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <BuyStrip />
            <SpecSection />
            <RoadMap />
            <Team />
            <Faq/>
            <WhatNext/>
            <Footer />
        </>
    )
}
