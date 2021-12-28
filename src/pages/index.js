import React from "react";
import "../reset.css";
import "../global.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";

const IndexPage = () => {
  return (
    <main>
      <Header/>
      <Banner/>
      <AboutMe/>
    </main>
  )
}

export default IndexPage
