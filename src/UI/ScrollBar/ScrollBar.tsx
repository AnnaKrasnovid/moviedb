import { ReactNode } from 'react';

import './ScrollBar.scss';

export interface ScrollBarInt {
    children: ReactNode,
}

function ScrollBar({ children }:ScrollBarInt) {
    return (
        <div className='scroll' >
            {children}
        </div>
    );
}

export default ScrollBar;