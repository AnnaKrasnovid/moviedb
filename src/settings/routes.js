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
    { id: '1', link: genresRoutes.ACTION_MOVIE, title: 'Боевики' },
    { id: '2', link: genresRoutes.MILITARY, title: 'Военные' },
    { id: '3', link: genresRoutes.DETECTIVE, title: 'Детективы' },
    { id: '4', link: genresRoutes.FAMILY, title: 'Семейные' },
    { id: '5', link: genresRoutes.DRAMA, title: 'Драмы' },
    { id: '6', link: genresRoutes.COMEDY, title: 'Комедии' },
    { id: '7', link: genresRoutes.CRIMINAL, title: 'Криминал' },
    { id: '8', link: genresRoutes.MELODRAMA, title: 'Мелодрамы' },
    { id: '9', link: genresRoutes.THRILLER, title: 'Триллеры' },
    { id: '10', link: genresRoutes.HORROR, title: 'Ужасы' },
    { id: '11', link: genresRoutes.FANTASTIC, title: 'Фантастика' },
    { id: '12', link: genresRoutes.FANTASY, title: 'Фэнтези' },
];

export const routes = {
    INDEX: '/',
    MOVIES: '/movies',
    // MOVIE: '/movies/:id',
    GENRES: '/genres',
    // GENRE: '/genres/:genre',
};

export const menu = [
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




