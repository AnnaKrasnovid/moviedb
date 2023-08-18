import { genresRoutes } from "../../settings/routes";

export const genresList = {
    genre_one: { id: 1, title: 'Боевики', genre: genresRoutes.ACTION_MOVIE, className: 'genres__box_genre_fighters', link: '' },
    genre_two: [
        { id: 2, title: 'Военные', genre: genresRoutes.MILITARY, className: ' genres__box_genre_military' },
        { id: 3, title: 'Детективы', genre: genresRoutes.DETECTIVE, className: 'genres__box_genre_detectives' },
    ],
    genre_three: [
        { id: 4, title: 'Семейные', genre: genresRoutes.FAMILY, className: 'genres__box_genre_childish' },
        { id: 5, title: 'Драмы', genre: genresRoutes.DRAMA, className: 'genres__box_genre_dramas' },
        { id: 6, title: 'Комедии', genre: genresRoutes.COMEDY, className: 'genres__box_genre_comedies' },
        { id: 7, title: 'Криминал', genre: genresRoutes.CRIMINAL, className: 'genres__box_genre_crime' },
        { id: 8, title: 'Мелодрамы', genre: genresRoutes.MELODRAMA, className: 'genres__box_genre_melodramas' },
        { id: 9, title: 'Триллеры', genre: genresRoutes.THRILLER, className: 'genres__box_genre_thrillers' },
        { id: 10, title: 'Ужасы', genre: genresRoutes.HORROR, className: 'genres__box_genre_horrors' },
        { id: 11, title: 'Фантастика', genre: genresRoutes.FANTASTIC, className: 'genres__box_genre_fantastic' },
        { id: 12, title: 'Фэнтэзи', genre: genresRoutes.FANTASY, className: 'genres__box_genre_fantasy' },
    ],
};
