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
  const {movie} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main movie={movie} />
        </Route>
        <Route exact path="/films/:id?/review">
          <AddReview />
        </Route>
        <Route exact path="/films/:id?">
          <Film />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/player/:id?">
          <Player />
        </Route>
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
  movie: PropTypes.object.isRequired
};

export default App;
