import React from 'react';
import './styles.css';
import TitleSection from '../TitleSection';
import StarRating from '../StarRating';


const Skills = () => {
    return(
        <section id="Skills" className="Skills">
            <TitleSection text="Habilidades" />
            <div className="Skills__container">
                <div className="Skills__hard-skills">
                    <h4 className="Skills__title">Hard Skills</h4>
                    <StarRating skill="Python" numStars={5} />
                    <StarRating skill="Javascript" numStars={5} />
                    <StarRating skill="React" numStars={5} />
                    {/* <StarRating skill="Git" numStars={5} /> */}
                    <StarRating skill="React Native" numStars={5} />
                    <StarRating skill="NodeJS (Express)" numStars={4} />
                    <StarRating skill="TypeScript" numStars={4} />
                    <StarRating skill="SCSS" numStars={4} />
                </div>
                <div className="Skills__soft-skills">
                    <h4 className="Skills__title">Soft Skills</h4>
                    <StarRating skill="Comunicação" numStars={5} />
                    <StarRating skill="Organização" numStars={5} />
                    <StarRating skill="Trabalho em Equipe" numStars={5} />
                    <StarRating skill="Criatividade" numStars={4} />
                    <StarRating skill="Proatividade" numStars={4} />
                </div>
            </div>
        </section>
    )
}

export default Skills;