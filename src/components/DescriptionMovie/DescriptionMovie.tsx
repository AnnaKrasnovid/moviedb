import ButtonText from '../../UI/ButtonText/ButtonText';

import './DescriptionMovie.scss';

interface DescriptionMovieInt {
    title: string,
    info: string | number,
    buttonText: string,
    callback: () => void
}

function DescriptionMovie({ title, info, buttonText, callback }: DescriptionMovieInt) {
    return (
        <div className='description-movie'>
            <div>
                <p className='description-movie__title'>{title}</p>
                <p className='description-movie__info' >{info}</p>
            </div>
            <ButtonText text={buttonText} callback={callback} />
        </div>
    );
}

export default DescriptionMovie;