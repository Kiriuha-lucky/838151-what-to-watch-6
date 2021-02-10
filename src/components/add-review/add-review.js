import React from 'react';
import {Link} from 'react-router-dom';
import FILMS from '../../mocks/films';
import PropTypes from 'prop-types';

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
          <form action="#" className="add-review__form" onSubmit={handleSubmit}>
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={handleFieldChange} defaultChecked />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={handleFieldChange} />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={handleFieldChange} />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={handleFieldChange} />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={handleFieldChange} />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>

                <input className="rating__input" id="star-6" type="radio" name="rating" value="6" onChange={handleFieldChange} />
                <label className="rating__label" htmlFor="star-6">Rating 6</label>

                <input className="rating__input" id="star-7" type="radio" name="rating" value="7" onChange={handleFieldChange} />
                <label className="rating__label" htmlFor="star-7">Rating 7</label>

                <input className="rating__input" id="star-8" type="radio" name="rating" value="8" onChange={handleFieldChange} />
                <label className="rating__label" htmlFor="star-8">Rating 8</label>

                <input className="rating__input" id="star-9" type="radio" name="rating" value="9" onChange={handleFieldChange} />
                <label className="rating__label" htmlFor="star-9">Rating 9</label>

                <input className="rating__input" id="star-10" type="radio" name="rating" value="10" onChange={handleFieldChange} />
                <label className="rating__label" htmlFor="star-10">Rating 10</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="reviewtext" id="reviewtext" placeholder="Review text" onChange={handleFieldChange}></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    </React.Fragment >
  );
};


export default AddReview;

AddReview.propTypes = {
  film: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};
