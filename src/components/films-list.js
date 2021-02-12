import React from 'react';
import FilmCard from './film-card';

const FilmsList = (props) => {
  let [activeFilm, setActiveFilm] = React.useState(0);
  const {films} = props;
  const onMouseEnter = (id) => {
    return setActiveFilm(activeFilm = id);
  };
  return films.map(({id, name, posterImage}) =>
    <FilmCard key={id} id={id} name={name} posterImage={posterImage} activeFilm={activeFilm} onMouseEnter={()=>onMouseEnter(id)} />);
};

export default FilmsList;


