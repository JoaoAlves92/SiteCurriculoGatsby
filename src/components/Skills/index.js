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
                    <StarRating skill="Python" numStars={4} />
                    <StarRating skill="Javascript" numStars={5} />
                </div>
                <div className="Skills__soft-skills">
                    <h4 className="Skills__title">Soft Skills</h4>
                    <StarRating skill="Comunicação" numStars={4} />
                    <StarRating skill="Javascript" numStars={5} />
                </div>
            </div>
        </section>
    )
}

export default Skills;