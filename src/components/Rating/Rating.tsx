import React, { useState } from 'react';

import { getRoundNumber } from '../../assets/utils';

import './Rating.scss';

type RatingRoundTypes = 'yellow' | 'orange';

interface RatingRoundInt {
    number: number,
    type: RatingRoundTypes,
}

function Rating({ number, type }: RatingRoundInt) {
    return (
        <div className='box-rating'>
            <span className={`box-rating__rating-icon box-rating__rating-icon_bg_${type}`}></span>
            <span className={`box-rating__rating-mark box-rating__rating-mark_bg_${type}`}>{getRoundNumber(number)}</span>
        </div>
    );
}

export default Rating;