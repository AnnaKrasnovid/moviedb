import React, { useState } from 'react';

import { getRoundNumber } from '../../assets/utils';

import './Rating.scss';

// type RatingRoundTypes = 'yellow' | 'orange';

// interface RatingRoundInt{
//     number: number,
// type: string
// }

function Rating({ number, type }) {
    return (
        <div className='box-rating'>
            <span className={`box-rating__rating-icon box-rating__rating-icon_bg_${type}`}></span>
            <span className={`box-rating__rating-mark box-rating__rating-mark_bg_${type}`}>{getRoundNumber(number)}</span>
          </div>
    );
}

export default Rating;