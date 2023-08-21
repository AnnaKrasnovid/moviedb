import { Link } from 'react-router-dom';

import { routes } from '../../settings/routes';
import { GenreInt } from '../../settings/interfaces';

import './GenreCard.scss';
interface GenreCardInt {
    index: number,
    item: GenreInt,  
}

function GenreCard({ item, index }: GenreCardInt) {
    return (
        <Link to={`${routes.GENRES}/${item.link}`} className={`genre-item genre-item_bg_${index}`} >
            <h3 className='genre-item__title'>{item.title}</h3>
        </Link>
    );
}

export default GenreCard;