import { Link } from 'react-router-dom';

import { routes } from '../../settings/routes';

import './GenreCard.scss';

function GenreCard({ className='', item }) {
    return (
        <Link to={`${routes.GENRES}/${item.genre}`} className={`genres__box ${className} ${item.className}`} >
            <h3 className='genres__title'>{item.title}</h3>
        </Link>
    );
}

export default GenreCard;