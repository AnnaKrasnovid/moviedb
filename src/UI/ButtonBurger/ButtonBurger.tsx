import { ButtonInt } from '../../settings/interfaces';

import './ButtonBurger.scss';

function ButtonBurger({ type = 'button', callback }: ButtonInt) {
    return (
        <button className='button-burger' onClick={callback} type={type}/>
    );
};

export default ButtonBurger;