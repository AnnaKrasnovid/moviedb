import './DescriptionMovieItem.scss';

interface DescriptionMovieItemInt {
    title: string,
    info: string | number,
}

function DescriptionMovieItem({ title, info }: DescriptionMovieItemInt) {
    return (
        <li className='description-item'>
            <p className='description-item__heading'>{title}</p>
            <p className='description-item__info'>{info}</p>
        </li>
    );
}

export default DescriptionMovieItem;