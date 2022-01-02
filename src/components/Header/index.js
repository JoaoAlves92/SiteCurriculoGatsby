import React, {useState} from "react";
import './styles.css';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = () => {
    const [showPanel, setShowPanel] = useState(false);

    return(
        <header className="header">
            <div className={ showPanel ? "header__drawer-active" : "header__container"}>
                <h1>João</h1>
                <div className="header__lista-links">
                    <a href="/#AboutMe" rel="noopener noreferrer">Sobre mim</a>
                    <a href="/#Skills" rel="noopener noreferrer">Habilidades</a>
                    <a href="/#Projects" rel="noopener noreferrer">Projetos</a>
                    <a href="/#" rel="noopener noreferrer">Contato</a>
                </div>
                {/* <i id="menu" className="fas fa-bars" style={{fontSize: "26px"}}></i> */}
                <div className="header__button__mobile" onClick={() => setShowPanel(!showPanel)}>
                    <div className={ showPanel? "hamburger-menu hamburguer-closed" : "hamburger-menu"}>
                        <div className="bar top"></div>
                        <div className="bar middle"></div>
                        <div className="bar bottom"></div>
                    </div>
                </div>
            </div>
            <div className="header__drawer" style={showPanel ? { animationName: 'animacao1' } : { display: 'none' }}>
                <div className="header__drawer__links">
                    <AnchorLink to="/#AboutMe" onAnchorLinkClick={() => setShowPanel(false)}>Sobre mim</AnchorLink>
                    <AnchorLink to="/#Skills" onAnchorLinkClick={() => setShowPanel(false)}>Habilidades</AnchorLink>
                    <AnchorLink to="/#Projects" onAnchorLinkClick={() => setShowPanel(false)}>Projetos</AnchorLink>
                    <AnchorLink to="/#" onAnchorLinkClick={() => setShowPanel(false)}>Contato</AnchorLink>
                </div>
            </div>
    </header>
    );
}

export default Header