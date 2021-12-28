import React from "react";
import "./styles.css";
import { FaGamepad, FaVideo, FaHeadphones, FaHamburger, FaDownload } from 'react-icons/fa';
import curriculo from '../../images/curriculo-joao-marangoni-1.pdf';


const AboutMe = () => {
    return(
        <section id="AboutMe" className="AboutMe">
        <h2 className="titulo-section">Sobre Mim</h2>
        <div className="AboutMe__conteudo">
            <p className="AboutMe__text"><span className="cor-destaque">Olá, meu nome é João,</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum congue elit ultricies ultrices. Aenean quis diam consequat nulla vehicula sagittis sit amet id purus. Integer scelerisque odio ac ultricies porttitor. In non purus tristique, rhoncus turpis at, gravida turpis. Etiam malesuada rutrum sodales. Maecenas at faucibus arcu, non pharetra lectus. Nam condimentum velit a dui lobortis lacinia. Vestibulum interdum rutrum mi sit amet congue. Sed a magna finibus, pulvinar ligula blandit, ullamcorper tellus.</p>
            
            <div className="AboutMe__tabela-pessoal">
                <h4>Detalhes Pessoais</h4><br></br>
                <table>
                    <tr>
                        <td className="cor-destaque" style={{ textAlign: 'left' }}>Data de nascimento</td>
                        <td>14/09/2001</td>
                    </tr>
                    <tr>
                        <td className="cor-destaque" style={{ textAlign: 'left' }}>Telefone</td>
                        <td>+55 11988599985</td>
                    </tr>
                    <tr>
                        <td className="cor-destaque" style={{ textAlign: 'left' }}>Email</td>
                        <td>jvamarangonia@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="cor-destaque" style={{ textAlign: 'left' }}>Cidade</td>
                        <td>São Paulo</td>
                    </tr>
                </table>
            </div>
            <div className="AboutMe__interesses">
                <h4>Meus Interesses</h4><br></br>
                <div className="AboutMe__lista-interesses">
                    <div className="AboutMe__lista-interesses-item-container" >
                        <FaGamepad size="26px"/><p>Jogos</p>
                    </div>
                    <div className="AboutMe__lista-interesses-item-container" >
                        <FaVideo size="26px"/><p>Filmes</p>
                    </div>
                    <div className="AboutMe__lista-interesses-item-container" >
                        <FaHeadphones size="26px"/><p>Músicas</p>
                    </div>
                    <div className="AboutMe__lista-interesses-item-container" >
                        <FaHamburger size="26px"/><p>Comida</p>
                    </div>
                </div>
            </div>
            <div className="clear"></div>
            {/* <div className="cv">
            <a id="cv" href="curriculo-joao-marangoni-1.pdf" download="curriculo-joao">Download CV <i className="fas fa-download"></i></a>
            </div> */}
            <div className="cv">
                <a id="cv" className="AboutMe__botao" href={curriculo} download="curriculo-joao"> Download CV <FaDownload/> </a>
            </div>
        </div>
        </section>
    )
}

export default AboutMe