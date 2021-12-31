import React from 'react';
import './styles.css';
import TitleSection from '../TitleSection';
import StarRating from '../StarRating';


const Skills = () => {
    return(
        <section id="Skills" className="Skills">
            <TitleSection text="Habilidades" />
            <div>
                Hard Skills
                <StarRating skill="Python" numStars={5} />
            </div>
        </section>
    )
}

export default Skills;