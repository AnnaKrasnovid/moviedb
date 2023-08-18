import { Link, useNavigate } from 'react-router-dom';

import MoviesList from '../components/MoviesList/MoviesList';

import { mov } from '../assets/mockData/movies';

function MoviesPage() {
    return (
        <MoviesList list={mov} />
    );
}

export default MoviesPage;