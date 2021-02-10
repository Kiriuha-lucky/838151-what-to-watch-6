import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import AddReview from '../add-review/add-review';
import Film from '../film/film';
import PropTypes from 'prop-types';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import NotFound from '../not-found/not-found';

const App = (props) => {
  const {movie, films} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main movie={movie} films={films} />
        </Route>
        <Route exact path="/films/:id?/review" component={AddReview} />
        <Route exact path="/films/:id?" component={Film} />
        <Route exact path="/mylist">
          <MyList films={films.filter((film) => film.is_favorite)} />
        </Route>
        <Route exact path="/player/:id?" component={Player}/>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movie: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        poster_image: PropTypes.string.isRequired,
        preview_image: PropTypes.string.isRequired,
        background_image: PropTypes.string.isRequired,
        background_color: PropTypes.string.isRequired,
        video_link: PropTypes.string.isRequired,
        preview_video_link: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        scores_count: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.array.isRequired,
        run_time: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired,
        is_favorite: PropTypes.bool.isRequired
      })
  ).isRequired
};

export default App;
