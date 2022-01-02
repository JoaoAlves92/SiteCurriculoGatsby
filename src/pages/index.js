import React from "react";
import "../reset.css";
import "../global.css";

// Libs
import { Helmet } from 'react-helmet';
import BackToTop from 'react-back-to-top';
import { FaArrowUp } from 'react-icons/fa';

// Componentes
import Header from "../components/Header";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const IndexPage = () => {
  return (
    <main>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Portifólio</title>
          <meta name="author" content="João Alves"/>
          <meta name="title" content="Joao Alves Portifolio Website"/>
          <meta name="description" content="Portfolio Website built with GatsbyJS to pratice my skills as a FrontEnd developer!"/>
          <meta http-equiv="content-language" content="pt-br"/>
          <meta name="reply-to" content="jvamarangonia@gmail.com"/>
      </Helmet>
      <Header/>
      <Banner/>
      <AboutMe/>
      <Skills/>
      <Projects/>
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
