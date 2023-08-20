import './ButtonText.scss'

type ButtonTextTypes = 'button';

interface ButtonTextInt {
    type?: ButtonTextTypes,
    text: string,
    callback: () => void
}

function ButtonText({ type = 'button', text = 'Text', callback }: ButtonTextInt) {
    return (
        <button type={type} onClick={callback} className='button-text hover'>{text}</button>
    );
};

export default ButtonText;