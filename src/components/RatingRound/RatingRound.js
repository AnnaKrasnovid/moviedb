import React, { useState } from 'react';

import { getRoundNumber } from '../../tools/utils';

import './RatingRound.scss';

// interface RatingRoundInt{
//     number: number,
//     className: string,
// title: string
// }

function RatingRound({ number, className = '', title }) {

    return (
        <div className={`rating ${className}`}>
            <span className='rating__estimation'>{getRoundNumber(number)}</span>
            <span className='rating__owner'>{title}</span>
        </div>
    );
}

export default RatingRound;