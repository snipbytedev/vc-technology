import React from 'react'
import Header from '../header/header'
import HeroSection from '../heroSection/heroSection'
import StatSection from '../statSection/statSection'
import ProductSection from '../productSection/productSection'
import ChooseUsSection from '../chooseUsSection/chooseUsSection'
import BuildTogetherSection from '../buildTogetherSection/buildTogetherSection'
import Footer from '../footer/footer'

const VcTechMainPage = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <StatSection/>
        <ProductSection/>
        <ChooseUsSection/>
        <BuildTogetherSection/>
        <Footer/>
    </div>
  )
}

export default VcTechMainPage