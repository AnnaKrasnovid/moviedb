import { genresRoutes, routes } from "./routes";
import { MenuItemInt,SubmenuItemInt } from "./interfaces";

export const submenuGenres:Array<SubmenuItemInt> = [
  { id: '1', path: genresRoutes.ACTION_MOVIE, title: 'Боевики', request: 'боевик' },
  { id: '2', path: genresRoutes.MILITARY, title: 'Военные', request: 'военный' },
  { id: '3', path: genresRoutes.DETECTIVE, title: 'Детективы', request: 'детектив' },
  { id: '4', path: genresRoutes.FAMILY, title: 'Семейные', request: 'семейный' },
  { id: '5', path: genresRoutes.DRAMA, title: 'Драмы', request: 'драма' },
  { id: '6', path: genresRoutes.COMEDY, title: 'Комедии', request: 'комедия' },
  { id: '7', path: genresRoutes.CRIMINAL, title: 'Криминал', request: 'криминал' },
  { id: '8', path: genresRoutes.MELODRAMA, title: 'Мелодрамы', request: 'мелодрама' },
  { id: '9', path: genresRoutes.THRILLER, title: 'Триллеры', request: 'триллер' },
  { id: '10', path: genresRoutes.HORROR, title: 'Ужасы', request: 'ужасы' },
  { id: '11', path: genresRoutes.FANTASTIC, title: 'Фантастика', request: 'фантастика' },
  { id: '12', path: genresRoutes.FANTASY, title: 'Фэнтези', request: 'фэнтези' },
];

export const menu: Array<MenuItemInt> = [
  {
    id: '1',
    path: routes.INDEX,
    title: 'Главная',
  },
  {
    id: '2',
    path: routes.MOVIES,
    title: 'Фильмы',
  },
  {
    id: '3',
    path: routes.GENRES,
    title: 'По жанру',
    submenu: submenuGenres,
  },
  {
    id: '4',
    path: routes.SERIALS,
    title: 'Сериалы',
  },
  {
    id: '5',
    path: routes.CARTOONS,
    title: 'Мультфильмы',
  },
];

