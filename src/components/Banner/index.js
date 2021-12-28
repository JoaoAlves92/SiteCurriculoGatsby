import React from "react";
import './styles.css';
import { Parallax } from 'react-parallax';
import banner from '../../images/img-banner.jpg';
import ImgPerfil from '../../images/foto-perfil.png';

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Banner = () => {
    return(
        <Parallax
        bgImage={banner}
        bgImageAlt="computer working"
        style={{height: '90vh'}}
        strength={500}
        contentClassName="banner__container"
        >
            <div class="banner__card-principal">
                <img className="banner__perfil-img" src={ImgPerfil} alt="foto do autor da página"/>
                <div class="banner__informacoes">
                    <h2>João Vitor Alves Marangoni</h2>
                    <p>Programador FullStack em desenvolvimento</p><br></br>
                    <a href="https://www.facebook.com/profile.php?id=100005020938622" target="_blank" rel="noreferrer"><FaFacebook size="22px"/></a>
                    <a href="https://twitter.com/teiosodadeepweb" target="_blank" rel="noreferrer"><FaTwitter size="22px"/></a>
                    <a href="https://www.linkedin.com/in/jo%C3%A3ovitormarangoni/" target="_blank" rel="noreferrer"><FaLinkedin size="22px"/></a>
                    <a href="https://www.instagram.com/alves_92/" target="_blank" rel="noreferrer"><FaInstagram size="22px"/></a>
                    <a href="https://github.com/JoaoAlves92" target="_blank" rel="noreferrer"><FaGithub size="22px"/></a>
                </div>
            </div>
        </Parallax>
    )
}

export default Banner;