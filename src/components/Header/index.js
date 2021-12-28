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
                    <a href="/#AboutMe">Sobre mim</a>
                    <a href="/#Skills">Habilidades</a>
                    <a href="/#">Projetos</a>
                    <a href="/#">Contato</a>
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
                    <AnchorLink to="/#Skills">Habilidades</AnchorLink>
                    <AnchorLink to="/#">Projetos</AnchorLink>
                    <AnchorLink to="/#">Contato</AnchorLink>
                </div>
            </div>
    </header>
    );
}

export default Header