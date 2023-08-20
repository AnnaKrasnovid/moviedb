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