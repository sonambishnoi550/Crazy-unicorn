
import React from 'react'
import Hero from './components/Hero'
import PreLoader from './common/PreLoader'
import Header from './components/Header'
import OurStory from './components/OurStory'
import AboutUs from './components/AboutUs'
import UnicornRoadmap from './components/UnicornRoadmap'
import UnicornTeam from './components/UnicornTeam'
import Faq from './components/Faq'
import LatestNews from './components/LatestNews'
import Footer from './components/Footer'
import BackToTop from './common/BackToTop'

const App = () => {
  return (
    <>
      <PreLoader />
      <Header/>
      <Hero />
      <OurStory />
      <AboutUs />
      <UnicornRoadmap />
      <UnicornTeam />
      <Faq />
      <LatestNews />
      <Footer />
      <BackToTop/>
    </>
  )
}

export default App