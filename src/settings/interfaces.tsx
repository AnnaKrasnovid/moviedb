export interface GenreItemInt {
    name: string,
}

export interface GenreInt {
    id: number | string,
    title: string,
    link: string,
}

export interface MovieInt {
    id: number
    type: string,
    name: string,
    rating: {
        kp: number,
        imdb: number,
        [propName: string]: string | number,
    },
    [propName: string]: string | number | {},
}

type ButtonTypes = 'button' | 'submit';
export interface ButtonInt {
    type?: ButtonTypes,
    text?: string,
    callback: () => void
}

export interface SubmenuItemInt {
    id: string, 
    path: string, 
    title: string, 
    request: string, 
}

export interface MenuItemInt {
    id: string,
    path: string,
    title: string,
    submenu?: Array<SubmenuItemInt>
}
