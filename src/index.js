import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Movie = {
  title: `Film`,
  genre: `drama`,
  year: `2014`
};

ReactDOM.render(
    <App movie={Movie}/>,
    document.getElementById(`root`)
);
