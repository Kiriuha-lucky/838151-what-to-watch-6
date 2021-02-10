import React from 'react';
import MovieCard from './movie-card';
import PropTypes from 'prop-types';


const FilmsList = (props) => {
  let [activeFilm, setActiveFilm] = React.useState(0);
  const {films} = props;
  return films.map(({ id, name, poster_image }) => {
    return <MovieCard key={id} id={id} name={name} posterImage={poster_image} onMouseEnter={() => setActiveFilm(activeFilm = id) } />
  });
};

export default FilmsList;
