import React from 'react';
import './styles.css';
import { FaStar } from 'react-icons/fa';

const StarRating = ({skill, numStars}) => {
    return(
        <div className='StarRating'>
            <p className='StarRating__name'>{skill}</p>
            <div className='StarRating__row-stars'>
                <FaStar size={30} style={{ color: 'yellow' }} />
                <FaStar size={30} style={{ color: 'yellow' }} />
                <FaStar size={30} style={{ color: 'yellow' }} />
                <FaStar size={30} style={{ color: 'yellow' }} />
                <FaStar size={30} style={{ color: 'yellow' }} />
            </div>
        </div>
    )
}

export default StarRating;