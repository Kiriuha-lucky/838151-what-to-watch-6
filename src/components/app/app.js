import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

const App = (props) => {
  const {movie} = props;
  return (
    <Main movie={movie} />
  );
};

App.propTypes = {
  movie: PropTypes.object.isRequired
};

export default App;
