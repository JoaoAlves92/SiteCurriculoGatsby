import React from "react";
import "../reset.css";
import "../global.css";

// Libs
import BackToTop from 'react-back-to-top';
import { FaArrowUp } from 'react-icons/fa';

// Componentes
import Header from "../components/Header";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

const IndexPage = () => {
  return (
    <main>
      <Header/>
      <Banner/>
      <AboutMe/>
      <Skills/>
      <BackToTop
        mainStyle={{
            width:'100%',
            height:'100%',
            marginTop: '20px'
        }}
        percentStyle={{
            display: 'none'
        }}
        animate='rotate'
        offsetTop={0}
        //step={50}
        //percent={true}
        //visiblePercent={50}
      >
        <FaArrowUp size={26} />
      </BackToTop>
    </main>
  )
}

export default IndexPage
