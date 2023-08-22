import { MenuItemInt } from "./interfaces";

export const genresRoutes = {
    ACTION_MOVIE: 'боевик',
    MILITARY: 'военный',
    DETECTIVE: 'детектив',
    FAMILY: 'семейный',
    COMEDY: 'комедия',
    CRIMINAL: 'криминал',
    MELODRAMA: 'мелодрама',
    THRILLER: 'триллер',
    HORROR: 'ужасы',
    FANTASTIC: 'фантастика',
    FANTASY: 'fantasy',
    DRAMA: 'драма',
};

const submenuGenres = [
    { id: '1', path: 'action-movie', title: 'Боевики', request: 'боевик' },
    { id: '2', path: 'miltary', title: 'Военные',request: 'военный' },
    { id: '3', path: 'detective', title: 'Детективы',request: 'детектив' },
    { id: '4', path: 'family', title: 'Семейные',request: 'семейный' },
    { id: '5', path: 'drama', title: 'Драмы',request: 'драма' },
    { id: '6', path: 'comedy', title: 'Комедии',request: 'комедия' },
    { id: '7', path: 'criminal', title: 'Криминал',request: 'криминал' },
    { id: '8', path: 'melodrama', title: 'Мелодрамы',request: 'мелодрама' },
    { id: '9', path: 'thriller', title: 'Триллеры',request: 'триллер' },
    { id: '10', path: 'horror', title: 'Ужасы',request: 'ужасы' },
    { id: '11', path: 'fantastic', title: 'Фантастика',request: 'фантастика' },
    { id: '12', path: 'fantasy', title: 'Фэнтези',request: 'fantasy'},
];

export const routes = {
    INDEX: '/',
    MOVIES: '/movies',
    // MOVIE: '/movies/:id',
    GENRES: '/genres',
    // GENRE: '/genres/:genre',
};

export const menu: Array<MenuItemInt> = [
    {
        id: '1',
        path: '/',
        title: 'Главная',
    },
    {
        id: '2',
        path: '/movies',
        title: 'Фильмы',
    },
    {
        id: '3',
        path: '/genres',
        title: 'По жанру',
        submenu: submenuGenres,
    },
    {
        id: '4',
        path: '/serials',
        title: 'Сериалы',
    },
    {
        id: '5',
        path: '/cartoons',
        title: 'Мультфильмы',
    },
];




