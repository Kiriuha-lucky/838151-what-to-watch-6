import React from 'react';
import FilmCard from './film-card';

const FilmsList = (props) => {
  let [activeFilm, setActiveFilm] = React.useState(0);
  const {films} = props;
  return films.map(({id, name, posterImage}) =>
    <FilmCard key={id} id={id} name={name} posterImage={posterImage} onMouseEnter={() => setActiveFilm(activeFilm)} />);
};

export default FilmsList;


