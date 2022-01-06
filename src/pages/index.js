import React from "react";
import "../reset.css";
import "../global.css";

// Libs

// Componentes
import Header from "../components/Header";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Seo from "../components/Seo";
import BackTop from '../components/BackTop';

const IndexPage = () => {
  return (
    <main>
      <Seo title="Portifólio" />
      <Header/>
      <Banner/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <BackTop/>
    </main>
  )
}

export default IndexPage
