import React from 'react';
import './styles.css';
import { FaStar } from 'react-icons/fa';

const StarRating = ({skill, numStars}) => {
    const rangeActiveStars = [...Array(numStars).keys()]
    const ActiveStars = rangeActiveStars.map(() => 
        <FaStar size={30} style={{ color: 'yellow' }} />
    )
    const rangeInactiveStars = [...Array(5 - numStars).keys()]
    const InactiveStars = rangeInactiveStars.map(() => 
        <FaStar size={30} />
    )

    return(
        <div className='StarRating'>
            <p className='StarRating__name'>{skill}</p>
            <div className='StarRating__row-stars'>
                {ActiveStars}
                {InactiveStars}
            </div>
        </div>
    )
}

export default StarRating;