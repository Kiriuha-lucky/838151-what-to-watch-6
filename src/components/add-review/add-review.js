import React from 'react';
import {Link} from 'react-router-dom';
import FILMS from '../../mocks/films';
import PropTypes from 'prop-types';
import ReviewForm from '../review-form/review-form';

const AddReview = (props) => {
  const [reviewForm, setReviewForm] = React.useState({
    rating: ``,
    reviewtext: ``
  });
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setReviewForm({...reviewForm, [name]: value});
  };
  const filmId = props.match.params.id;
  const film = FILMS.filter((movie)=>movie.id == filmId)[0];
  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.background_image} alt={film.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">{film.name}</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>
          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.preview_image} alt={film.name} width="218" height="327" />
          </div>
        </div>
        <div className="add-review">
          <ReviewForm />
        </div>

      </section>
    </React.Fragment >
  );
};


export default AddReview;

AddReview.propTypes = {
  film: PropTypes.object,
  match: PropTypes.object.isRequired
};
