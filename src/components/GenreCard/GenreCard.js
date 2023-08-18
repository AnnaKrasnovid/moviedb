import { Link } from 'react-router-dom';

import './GenreCard.scss';

function GenreCard({ className='', item }) {
    return (
        <Link to={item.genre} className={`genres__box ${className} ${item.className}`} >
            <h3 className='genres__title'>{item.title}</h3>
        </Link>
    );
}

export default GenreCard;