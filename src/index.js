import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import FILMS from './mocks/films';

const Movie = {
  id: 3,
  name: `The Grand Budapest Hotel`,
  posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
  previewImage: `img/the-grand-budapest-hotel-poster.jpg`,
  backgroundImage: `img/the-grand-budapest-hotel-poster.jpg`,
  backgroundColor: `#ffffff`,
  videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 8.9,
  scoresCount: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  runTime: 99,
  genre: `Comedy`,
  released: 2014,
  isFavorite: true
};

ReactDOM.render(
    <App movie={Movie} films={FILMS} />,
    document.getElementById(`root`)
);
