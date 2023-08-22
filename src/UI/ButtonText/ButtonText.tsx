import { ButtonInt } from '../../settings/interfaces';

import './ButtonText.scss';

function ButtonText({ type = 'button', text = '', callback }: ButtonInt) {
    return (
        <button type={type} onClick={callback} className='button-text hover'>{text}</button>
    );
};

export default ButtonText;